import { Stack, Button, Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrimarySearchAppBar from '../utils/AppBar'
import AppCard from '../utils/AppCard'
import SideBar from '../utils/SideBar'
import Home from './Home'

export default function MainLayout() {
    const mainStyle = {
        content: {
            height: '100vh',
        },
        card: {
            height: '100%',
            marginTop: '0.5%',
            height: '85vh',
            backgroundColor: 'white'
        }
    }
    return (
        <Stack direction={'column'}  >

            <Stack direction={'column'}>
                <PrimarySearchAppBar />
            </Stack>

            <Grid container spacing={2}>
                {/* Sidebar */}
                <Grid item xs={2}>
                    <SideBar />
                </Grid>

                {/* Content */}
                <Grid item xs={10}>
                    <Box style={mainStyle.content}>
                        <AppCard
                            style={mainStyle.card}
                            title={'Home'}
                            subTitle={'List of seafoods'}
                            content={<Outlet />}
                        />
                        <h3>Footer</h3>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    )
}
