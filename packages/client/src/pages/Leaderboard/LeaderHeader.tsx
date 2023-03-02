import { Box } from '@mui/material'
import React, { FC } from 'react'
import { AvatarBox } from '../../components/AvatarBox'



export const LeaderHeader: FC<> = () => {
    return (
        <Box component="header">
            <label>
                <AvatarBox
                    src={fileData as string}
                    sx={{
                        width: '100px',
                        height: '100px',
                        bgcolor: '#1E515D',
                        cursor: 'pointer',
                    }}
                />
                <input
                    accept="image/*"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        ChooseFile(event)
                    }
                />
            </label>
        </Box>
    )
}
