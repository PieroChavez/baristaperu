import { Box, Typography, Avatar, IconButton, TextField } from "@mui/material";

const AdvertWidget = () => {
  return (
    <>
     <Box
              p="1rem"
              bgcolor="#f6f6f610"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
              mb="2rem"
            >
              <Typography variant="h6">Anuncio</Typography>
              <Typography variant="body2">
                ¡Nuevo curso de barismo nivel intermedio! ✨
              </Typography>
            </Box>
      
    </>
  )
}

export default AdvertWidget
