import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AppCard({ title, subTitle, content, style }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card style={style} variant="elevation">
                <CardContent>
                    <Typography variant='h5' component={'div'} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>

                    <Typography variant='subtitle1' sx={{ mb: 1.5 }} color="text.secondary">
                        {subTitle}
                    </Typography>

                    {content}
                </CardContent>
            </Card>
        </Box>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    );
}