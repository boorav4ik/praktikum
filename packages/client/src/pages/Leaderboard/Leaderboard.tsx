import { Box, Container, Stack, Divider, Grid  } from '@mui/material'
import { ItemLeader } from './ItemLeader'
import { LeaderHeader } from './LeaderHeader'


const gamers1 = [
    {
        number: 1,
        name: "Иван",
        score: "2342",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    },
    {
        number: 2,
        name: "Петр",
        score: "345435",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    },
    {
        number: 3,
        name: "Василий",
        score: "64564",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    }
]

const gamers2 = [
    {
        number: 4,
        name: "Аркадий",
        score: "123",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    },
    {
        number: 5,
        name: "Афанасий",
        score: "7895",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    },
    {
        number: 6,
        name: "Ярослав",
        score: "9806",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
    },
]


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

                <LeaderHeader/>
                <Stack
                    direction="row"
                    sx={{
                        mt: "35px"
                    }
                    }
                    divider={<Divider
                        sx={{
                            borderRightWidth: 3,
                            bgcolor: '#1E515D',
                        }}
                        orientation="vertical"
                        flexItem
                    />}
                    spacing={2}
                >
                    <Stack

                        spacing={2}>

                        {gamers1.map(item => (
                            <ItemLeader
                                number={item.number}
                                name={item.name}
                                score={item.score}
                                avatar={item.avatar}
                            />
                        ))}

                    </Stack>
                    <Stack spacing={2}>
                        {gamers2.map(item => (
                            <ItemLeader
                                number={item.number}
                                name={item.name}
                                score={item.score}
                                avatar={item.avatar}
                            />
                        ))}

                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}