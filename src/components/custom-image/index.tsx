/* eslint-disable @next/next/no-img-element */
import React, {memo, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

const CustomImage = ({
  img,
  alt,
  style,
  blurLevel = 5,
  height = undefined,
  width = undefined,
  ...props
}: any) => {
  const [hasPlaceholder, setHasPlaceholder] = useState(true)
  const router = useRouter();
  return (
    <>
      {/* {hasPlaceholder && (
        <img
          height={height}
          width={width}
          alt=""
          src="/loader.svg"
        />
      )} */}
        <Image
          {...img}
          {...props}
          height={height}
          width={width}
          alt={alt}
          loader="blur"
          blurDataURL={`/public/loader.svg`}
          onLoadStart={() => {
            console.log('load started');
            setHasPlaceholder(true)
          }}
          onLoadedData={() => {
            console.log('load completed')
            setHasPlaceholder(false);
          }}
        />


    </>
  )
}

export default CustomImage