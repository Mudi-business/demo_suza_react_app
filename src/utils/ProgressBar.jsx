import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgresBar({loadingColor}) {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }}>
      <LinearProgress  color={loadingColor} />
    </Stack>
  );
}