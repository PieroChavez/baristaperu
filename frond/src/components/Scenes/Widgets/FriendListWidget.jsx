import { Box, Typography } from '@mui/material';

const FriendListWidget = () => {
  return (
    <div>
         <Box
              p="1rem"
              bgcolor="#f6f6f610"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              <Typography variant="h6">Amigos</Typography>
              <Typography variant="body2"> {/*<Team/>*/} </Typography>
            </Box>
      
    </div>
  )
}

export default FriendListWidget
