// src/components/avatar.jsx
import { Avatar as MuiAvatar } from '@mui/material'

export function Avatar({ src, alt = '', initials = '', className = '', square = false }) {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      variant={square ? 'square' : 'circular'}
      className={className}
    >
      {!src && initials}
    </MuiAvatar>
  )
}
        