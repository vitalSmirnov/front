import { Image } from "antd"
import React from "react"
interface ImageProps {
  path: string
  width?: number
  height?: number
}
const apiMediaPath = process.env.NEXT_PUBLIC_MEDIA_URL

export const AppImage: React.FC<ImageProps> = ({ path, width = 50, height = 50 }) => {
  return (
    <Image
      preview
      src={apiMediaPath + path}
      alt='attachment'
      width={width}
      height={height}
      style={{ objectFit: "cover" }}
    />
  )
}
