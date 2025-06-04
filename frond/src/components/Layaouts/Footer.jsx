import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => (
  <Box
    component="footer"
    sx={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      bgcolor: '#f5f5f5',
      py: 2,
      textAlign: 'center',
      zIndex: 1300,
    }}
  >
    <Typography variant="body2" sx={{ color: 'gray' }}>
      © {new Date().getFullYear()} Baristas Perú. Todos los derechos reservados.
    </Typography>
  </Box>
)

export default Footer