import React, { FC, useState, useEffect } from 'react'
import {Box, Stack} from "@mui/material";
import {AvatarBox} from "../../components/AvatarBox";
import Typography from "@mui/material/Typography";


interface  ItemLeader {
    name: string,
    score: string,
    avatar: string,
    number: number,
}

export const ItemLeader: FC<ItemLeader> = ({
    name,
    score,
    avatar,
    number: number,
    }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                m: '0',
                mb: '15px',

            }}>
            <Box
                sx={{
                    width: 20,
                    mr: '10px',
                   }}>
                <Typography
                    component="span"
                    sx={{ fontWeight: 700, fontSize: 32, display: 'contents'}}
                    color="#C1EEE1"
                >
                    {number}
                </Typography>

            </Box>

            <AvatarBox />
            <Box
                sx={{
                    width: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    ml: "25px"
                    }}>
                <Typography
                    component="div"
                    sx={{ fontWeight: 700, fontSize: 20, display: 'block'}}
                    color="green.64"
                >
                    {name}
                </Typography>

                <Typography
                    component="div"
                    sx={{ fontWeight: 700, fontSize: 24, display: 'block'}}
                    color="white"
                >
                    {score}
                </Typography>

            </Box>

        </Box>
    )
}