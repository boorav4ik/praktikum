import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

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

