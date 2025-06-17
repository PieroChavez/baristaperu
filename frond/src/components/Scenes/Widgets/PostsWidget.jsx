import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { userSocios } from "@/assets/Logos/Logos";

const PostsWidget = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const barista = userSocios.find((socio) => socio.id === 11);

    setPosts([
      {
        id: barista.id,
        user: barista.name,
        content: barista.content,
        image: barista.post,
        logo: barista.logo,
        likes: 100,
        comments: 25,
      },
    
    ]);
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            mb: 2,
            borderRadius: 3,
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Box display="flex" alignItems="center" p={2}>
            <Avatar
              src={post.logo || ""}
              alt={post.user}
              sx={{ width: 48, height: 48, mr: 2 }}
            >
              {!post.logo && post.user[0]}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {post.user}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Hace 1 hora
              </Typography>
            </Box>
          </Box>

          {post.image && (
            <CardMedia
              component="img"
              height="300"
              image={post.image}
              alt="Imagen del post"
              sx={{ objectFit: "cover" }}
            />
          )}

          <CardContent>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon sx={{ color: "#e57373" }} />
            </IconButton>
            <Typography variant="body2">{post.likes}</Typography>
            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon sx={{ ml: 2 }} />
            </IconButton>
            <Typography variant="body2">{post.comments}</Typography>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default PostsWidget;
