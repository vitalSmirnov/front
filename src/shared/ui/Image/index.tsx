import { Image } from "antd"
import React from "react"
interface ImageProps {
  path: string
}
const apiMediaPath = process.env.NEXT_PUBLIC_MEDIA_URL

export const AppImage: React.FC<ImageProps> = ({ path }) => {
  return (
    <Image
      preview
      src={apiMediaPath + path}
      alt='attachment'
      width={50}
      height={50}
      style={{ objectFit: "cover" }}
    />
  )
}
