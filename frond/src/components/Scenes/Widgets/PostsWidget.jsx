import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const PostsWidget = () => {
  const [coffeePrice, setCoffeePrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.tradingeconomics.com/commodity/coffee?c=dff31f06e42044f:p6z6n6ucsr1862r"
        );
        const data = await res.json();
        setCoffeePrice(data[0]?.price);
      } catch (error) {
        console.error("Error al obtener el precio del café:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Actualiza cada 60s

    return () => clearInterval(interval);
  }, []);

  const posts = [
    {
      id: 1,
      user: "Carlos Ríos",
      content: "Hoy preparé un Chemex increíble 🤎 #coffeeLovers",
    },
  ];

  return (
    <>
      {/* Widget del precio del café */}
      <Box
        p="1rem"
        bgcolor="#fff3e0"
        borderRadius="1rem"
        mb="1.5rem"
        boxShadow="0 0 8px rgba(0,0,0,0.1)"
        textAlign="center"
      >
        <Typography variant="h6" fontWeight="bold">
          ☕ Precio actual del café:
        </Typography>
        <Typography variant="h5" color="primary">
          {coffeePrice ? `$${coffeePrice.toFixed(2)} USD` : "Cargando..."}
        </Typography>
      </Box>

      {/* Posts */}
      {posts.map((post) => (
        <Box
          key={post.id}
          p="1rem"
          bgcolor="#f6f6f610"
          borderRadius="1rem"
          mb="1rem"
          boxShadow="0 0 5px rgba(0,0,0,0.05)"
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {post.user}
          </Typography>
          <Typography variant="body1">{post.content}</Typography>
        </Box>
      ))}
    </>
  );
};

export default PostsWidget;
