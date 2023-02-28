import React, { FC, useState, useEffect } from 'react'
import {Box, Stack} from "@mui/material";
import {AvatarBox} from "../../components/AvatarBox";


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
                mx: 5,
            }}>
            {number}
            <AvatarBox />
            {name}
            {score}
        </Box>
    )
}