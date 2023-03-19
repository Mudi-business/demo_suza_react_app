import { Box, Stack } from "@mui/material";
import React,{} from "react"
import SIdeBarItem from "./SIdeBarItem";
import {Home,ShoppingCart,Payment,SupportAgent} from '@mui/icons-material'
function SideBar() {
    const sideBarStyle = {
        container:{
            height:'100vh',
            backgroundColor:'white',
            padding:7
        }
    }
    return (
        <Stack direction={'column'} spacing={1} style={sideBarStyle.container} >
            <SIdeBarItem icon={<Home color="info" />} url="/" title={'Home'} />
            <SIdeBarItem icon={<ShoppingCart color="info" />} url="/order" title={'Order'} />
            <SIdeBarItem icon={<Payment color="info" />} url="/payments" title={'Payments'} />
            <SIdeBarItem icon={<SupportAgent color="info" />} url="/customers" title={'Customer'} />
        </Stack>
    )
}

export default SideBar
