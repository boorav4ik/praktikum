import { Box } from '@mui/material'
import React, { FC } from 'react'
import { AvatarBox } from '../../components/AvatarBox'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface LeaderHeaderProps {
  fileData: string | ArrayBuffer | null
}

export const LeaderHeader: FC<any> = () => {
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
