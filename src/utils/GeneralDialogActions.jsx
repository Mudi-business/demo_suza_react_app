import { Button, Stack } from '@mui/material'
import React from 'react'

export default function GeneralDialogActions({action,handleSubmit,handleOnClose}) {
    return (
        <Stack direction={'row'} justifyContent={'center'} >
            <Button onClick={handleSubmit}>{action}</Button>
            <Button onClick={handleOnClose} >Close</Button>
        </Stack>
    )
}
