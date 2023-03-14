import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextField({value,type,name,onChange,label,error,placeholder,helperText}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      
      noValidate
      autoComplete="off"
    >

      <TextField
        name={name}
        fullWidth
        error={error}
        type={type}
        value={value}
        id="filled-error-helper-text"
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        helperText={helperText}
        variant="filled"
      />
    </Box>
  );
}