'use client'
import Image from 'next/legacy/image'


import { useState } from 'react'


function HygraphImageLoader({ src, width }) {
    const relativeSrc = (src) => src.split('/').pop();

    return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
      src
    )}`;
  }

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
  }



  export default function BlurImage({ image }) {
    const [isLoading, setLoading] = useState(true)

    return (
        <div style={{letterSpacing:0,wordSpacing:0,fontSize:0}}
        className="relative overflow-hidden bg-gray-900 border-4 border-white rounded-lg shadow-md w-52 h-52 aspect-w-1 xl:aspect-w-7">
          <Image

          src={image}
          alt="Picture of the author"


            fill
            style={{objectFit:"contain"}}
            className={cn(
              'duration-300 ease-in-out hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>

    )
  }
