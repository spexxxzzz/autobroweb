'use client'

import * as React from 'react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface ImageUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  onUpload?: (file: File) => void
  value?: string
  onChange?: (value: string) => void
}

export function ImageUpload({
  className,
  onUpload,
  value,
  onChange,
  ...props
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
          if (onChange) {
            onChange(reader.result as string)
          }
        }
        reader.readAsDataURL(file)
        if (onUpload) {
          onUpload(file)
        }
      }
    },
    [onChange, onUpload]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        'relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg transition-colors',
        isDragActive
          ? 'border-primary bg-secondary/20'
          : 'border-muted-foreground/25 hover:border-muted-foreground/50',
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />

      {preview ? (
        <div className="relative w-40 h-40">
          <Image
            src={preview}
            alt="Preview"
            className="object-cover rounded-lg"
            fill
            sizes="160px"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-xs text-muted-foreground">
          <svg
            className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPG, GIF (MAX. 800x400px)
          </p>
        </div>
      )}
    </div>
  )
}