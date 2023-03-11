import { Box, Typography } from '@mui/material'

export function LeaderHeader() {
    return (
        <Box component="header">
            <Typography
                component="span"
                sx={{ fontWeight: 700, fontSize: 32, display: 'contents' }}
                color="green.64">
                Список лидеров
            </Typography>
        </Box>
    )
}

