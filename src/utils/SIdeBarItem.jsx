import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SIdeBarItem({ title, icon,url }) {
    const navigate = useNavigate();
    const sideBarItemStyle = {
        container: {
            backgroundColor: 'white',
            borderRadius: 7,
        },
        text: {
            marginTop: '5%'
        }
    }
    return (
        <Stack style={sideBarItemStyle.container} justifyContent={'center'}>
                <Button onClick={()=>{
                    navigate(`${url}`)
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <IconButton disabled aria-label="delete" size="large">
                                {icon}
                            </IconButton>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                style={sideBarItemStyle.text}
                                variant='h6'
                                textAlign={'left'}
                            >
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
        </Stack>
    )
}
