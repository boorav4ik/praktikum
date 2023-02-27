import { Box, Container } from '@mui/material'
import { useState, useEffect } from 'react'
import { AvatarBox } from '../../components/AvatarBox'



export function LeaderboardPage() {


    return (
        <Container component="main" maxWidth="md">
            <Box
                bgcolor="background.paper"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    my: 10,
                    border: '3px solid #1E515D',
                    borderRadius: '3px',
                    p: 3,
                }}>
                <AvatarBox />
            </Box>
        </Container>
    )
}