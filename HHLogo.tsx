import * as React from 'react'

interface HHLogoProps {
  size?: number
  variant?: 'white' | 'dark' | 'red'
  className?: string
}

/**
 * Helpful Handlers official logo mark — the interlocked HH sword/shield emblem.
 * Uses pre-processed transparent PNG assets for perfect rendering on any background.
 *
 * variant='white' → white logo for dark backgrounds (navbar, footer)
 * variant='red'   → red logo for accent use
 * variant='dark'  → dark/black logo for light backgrounds
 */
export default function HHLogo({ size = 32, variant = 'white', className = '' }: HHLogoProps) {
  const [error, setError] = React.useState(false)
  
  const srcMap = {
    white: '/images/logo-white.png',
    red: '/images/logo-red.png',
    dark: '/images/logo-mark.jpg',
  }

  const filterMap = {
    white: 'none',
    red: 'none',
    dark: 'brightness(0)',
  }

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center font-bold rounded-lg ${className}`}
        style={{ 
          width: size, 
          height: size, 
          backgroundColor: variant === 'red' ? '#8B0000' : '#ffffff20',
          color: variant === 'white' ? 'white' : '#8B0000',
          fontSize: size * 0.5
        }}
      >
        HH
      </div>
    )
  }

  return (
    <img
      src={srcMap[variant]}
      alt="Helpful Handlers"
      width={size}
      height={size}
      onError={() => setError(true)}
      style={{
        filter: filterMap[variant],
        objectFit: 'contain',
        display: 'inline-block',
        flexShrink: 0,
      }}
      className={className}
    />
  )
}
