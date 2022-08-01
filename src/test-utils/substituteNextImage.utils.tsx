/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import * as NextImage from "next/image"
import { ClassAttributes, ImgHTMLAttributes } from "react"

export const substituteNextImage = (): void => {
  Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLImageElement> &
        ImgHTMLAttributes<HTMLImageElement>
      //@ts-ignore
    ) => <img {...props} priority="true" />,
  })
}
