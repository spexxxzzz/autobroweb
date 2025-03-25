const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080; // Change this to your desired port

const server = http.createServer((req, res) => {
  console.log('Request URL:', req.url); // Log the requested URL for debugging
  
  // Handle the root path
  if (req.url === '/') {
    serveFile(path.join(__dirname, 'web.html'), res);
    return;
  }
  
  // Try to serve the file directly from the requested path
  let filePath = path.join(__dirname, req.url);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists, serve it
      serveFile(filePath, res);
    } else {
      // File doesn't exist at the direct path
      
      // Special case for cogni.jpeg - try multiple possible locations
      if (req.url.includes('cogni.jpeg')) {
        const possiblePaths = [
          path.join(__dirname, 'public', 'images', 'cogni.jpeg'),
          path.join(__dirname, 'public', 'cogni.jpeg'),
          path.join(__dirname, 'images', 'cogni.jpeg'),
          path.join(__dirname, 'cogni.jpeg')
        ];
        
        // Try each possible path
        tryPaths(possiblePaths, 0);
        
        function tryPaths(paths, index) {
          if (index >= paths.length) {
            // None of the paths worked
            res.writeHead(404);
            res.end('Image not found: cogni.jpeg');
            return;
          }
          
          fs.access(paths[index], fs.constants.F_OK, (err) => {
            if (!err) {
              console.log('Found image at:', paths[index]);
              serveFile(paths[index], res);
            } else {
              tryPaths(paths, index + 1);
            }
          });
        }
      } else {
        // For other files, try the public directory
        const publicPath = path.join(__dirname, 'public', req.url);
        fs.access(publicPath, fs.constants.F_OK, (err) => {
          if (!err) {
            serveFile(publicPath, res);
          } else {
            res.writeHead(404);
            res.end('File not found: ' + req.url);
          }
        });
      }
    }
  });
});

function serveFile(filePath, res) {
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error('Error reading file:', error);
      res.writeHead(500);
      res.end('Server error: ' + error.code);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/web.html to view your animation`);
}); 