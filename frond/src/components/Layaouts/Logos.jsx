import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { logos } from '@/assets/Logos/Logos';

export default function Logos() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleScroll = (e) => {
    if (e.deltaX > 0 || e.touches) {
      setCurrent((prev) => (prev + 1) % logos.length);
    } else if (e.deltaX < 0) {
      setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
    }
  };

  return (
    <Box
      p="1rem"
      bgcolor="#f6f6f610"
      borderRadius="1rem"
      boxShadow="0 0 10px rgba(0,0,0,0.1)"
      mt={1}
    >
      <Box maxWidth="lg" mx="auto" px={3}>
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          color="text.primary"
          mb={2}
        >
          Aliados por una caficultura sostenible
        </Typography>

        <Box
          className="w-full max-w-xs mx-auto overflow-hidden relative"
          onWheel={handleScroll}
          onTouchStart={handleScroll}
          sx={{
            display: 'flex',
            overflowX: 'hidden',
            gap: 2,
            py: 2,
            px: 1,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Box
            className="flex transition-transform duration-700"
            sx={{
              transform: `translateX(-${current * 100}%)`,
              width: `${logos.length * 100}%`,
            }}
          >
            {logos.map((logo, idx) => (
              <Box
                key={idx}
                className="flex-shrink-0 w-full flex items-center justify-center p-4"
                sx={{ width: '100%' }}
              >
                <img
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="h-16 w-auto object-contain"
                  draggable={false}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
