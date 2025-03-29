export const metadata = {
  title: 'Agentic AI Corporation',
  description: 'Web of AI Agents',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This will override any default icons */}
        <link rel="icon" href="data:," />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-slate-900">
        {children}
      </body>
    </html>
  );
} 