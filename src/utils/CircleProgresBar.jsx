import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircleProgresBar({color,loading}) {
  return (
    <Box sx={{ display: 'flex' }}>
      {
        loading && <CircularProgress color={color} />
      }
    </Box>
  );
}