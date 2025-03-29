'use client'

import * as React from 'react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface ImageUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean
  onChange: (value: string) => void
  value: string
}

export function ImageUpload({
  className,
  disabled,
  onChange,
  value,
  ...props
}: ImageUploadProps) {
  const [base64, setBase64] = useState(value)

  const handleChange = useCallback((base64: string) => {
    onChange(base64)
    setBase64(base64)
  }, [onChange])

  const handleDrop = useCallback((files: File[]) => {
    const file = files[0]
    const reader = new FileReader()

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const base64 = event.target?.result as string
      handleChange(base64)
    }

    reader.readAsDataURL(file)
  }, [handleChange])

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    }
  })

  return (
    <div
      {...props}
      {...getRootProps({
        className: `
          relative
          cursor-pointer
          hover:opacity-70
          transition
          border-dashed
          border-2
          p-6
          border-neutral-300
          flex
          flex-col
          justify-center
          items-center
          gap-4
          text-neutral-600
          ${disabled && 'opacity-50 cursor-default'}
        `
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="relative w-full h-40">
          <Image
            fill
            style={{ objectFit: 'cover' }}
            src={base64}
            alt="Uploaded image"
          />
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black
              bg-opacity-50
              text-white
              rounded-md
              opacity-0
              hover:opacity-100
              transition
            "
            onClick={(e) => {
              e.stopPropagation()
              handleChange('')
            }}
          >
            <X size={20} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-semibold">
            Click to upload or drag and drop
          </div>
          <div className="text-sm text-gray-500">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </div>
        </div>
      )}
    </div>
  )
}