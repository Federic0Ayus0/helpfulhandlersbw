import React from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = true, style, ...rest }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/[0.06] backdrop-blur-xl ${
        hover ? 'transition-all duration-250 hover:border-white/10 hover:-translate-y-0.5 hover:shadow-elevated' : ''
      } ${className}`}
      style={{ background: 'rgba(22, 25, 34, 0.72)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)', ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}
