import React from 'react'
import { Box, Typography } from '@mui/material'
import { perfilSocios } from '@/assets/Aliados/Aliados'
import { useNavigate } from 'react-router-dom'

const FriendListWidget = () => {
  const navigate = useNavigate()

  const handleClick = (nombre) => {
    // Codificamos el nombre para evitar errores en la URL
    navigate(`/user/${encodeURIComponent(nombre)}`)
  }

  return (
    <Box
      mt={1}
      p="0"
      bgcolor="#f6f6f610"
      borderRadius="1rem"
      boxShadow="0 0 10px rgba(0,0,0,0.1)"
      sx={{
        maxHeight: '360px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ccc',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f6f6f6',
        },
      }}
    >
      {/* Título fijo */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#f6f6f610',
          backdropFilter: 'blur(4px)',
          borderBottom: '1px solid #e0e0e0',
          p: '1rem',
        }}
      >
        <Typography variant="h6">Aliados</Typography>
      </Box>

      {/* Lista scrollable */}
      <Box px="2rem" pt="0.5rem" pb="1rem">
        <ul role="list" className="divide-y divide-gray-100">
          {perfilSocios.slice(0, 20).map((socio) => (
            <li
              key={socio.correo || socio.nombre}
              onClick={() => handleClick(socio.nombre)}
              className="flex justify-between gap-x-6 py-3 cursor-pointer hover:bg-gray-100 transition-all rounded-lg"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt={socio.nombre}
                  src={socio.imagen}
                  className="w-12 h-12 flex-none rounded-full bg-gray-50 object-cover"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold text-gray-900">{socio.nombre}</p>
                  {socio.correo && (
                    <p className="mt-1 truncate text-xs text-gray-500">{socio.correo}</p>
                  )}
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                {socio.rol && <p className="text-sm text-gray-900">{socio.rol}</p>}
                {socio.ultimaConexion ? (
                  <p className="mt-1 text-xs text-gray-500">
                    Última vez visto{' '}
                    <time dateTime={socio.ultimaConexionFechaHora}>{socio.ultimaConexion}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default FriendListWidget
