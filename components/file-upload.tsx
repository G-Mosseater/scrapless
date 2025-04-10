'use client'

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "../components/dropzone"
import { useSupabaseUpload } from "@/hooks/use-supabase-upload"

type FileUploadProps = {
  onUploadComplete: (url: string) => void
}

const FileUpload = ({ onUploadComplete }: FileUploadProps) => {
  const props = useSupabaseUpload({
    bucketName: 'product-images',
    // path: 'uploads',
    allowedMimeTypes: ['image/*'],
    maxFiles: 1,
    maxFileSize: 1000 * 1000 * 10,
    upsert: true,
    onUploadComplete: (fileUrl: string) => {
      onUploadComplete(fileUrl)
    }
  })
  
  

  return (
    <div className="max-w-[500px]">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  )
}

export default FileUpload
