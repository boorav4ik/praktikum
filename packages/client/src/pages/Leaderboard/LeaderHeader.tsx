import { Box } from '@mui/material'
import React, { FC } from 'react'
import { AvatarBox } from '../../components/AvatarBox'
import Typography, { TypographyProps } from '@mui/material/Typography'

export const LeaderHeader = () => {
    return (
        <Box component="header">
            <Typography
                component="span"
                sx={{ fontWeight: 700, fontSize: 32, display: 'contents' }}
                color="green.64"
              >
                Список лидеров
            </Typography>
        </Box>
    )
}
