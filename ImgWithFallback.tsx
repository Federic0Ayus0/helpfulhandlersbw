import React from 'react'

interface ImgWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

export default function ImgWithFallback({ src, fallback, alt, ...props }: ImgWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src)

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback)
    } else if (src && src.includes('mascot')) {
      setImgSrc('https://api.dicebear.com/7.x/bottts/svg?seed=HH&backgroundColor=b6e3f4,c0aede,d1d4f9')
    } else {
      setImgSrc(`https://picsum.photos/seed/${alt || 'hh'}/800/600`)
    }
  }

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  )
}
