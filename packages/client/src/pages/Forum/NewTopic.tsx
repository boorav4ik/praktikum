import { Box, Typography } from '@mui/material'
import { Button } from 'components/Button'
import { TextField } from 'components/TextFields'
import { useState } from 'react'
import { useForum } from 'hooks/useForum'
import { Nullable } from 'utils/nullableType'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '3px solid #1E515D',
  borderRadius: 11,
  boxShadow: 24,
  p: 4,
}

type NullableString = Nullable<string>
interface NewTopicProps {
  handleModal: (state: boolean) => void
  id_theme: NullableString
}

export function NewTopic({ handleModal, id_theme }: NewTopicProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [{}, { createNewTopic }] = useForum()

  function newTheme() {
    if (!title || !description || !id_theme) return
    createNewTopic({ title, description, id_theme })
    handleModal(false)
  }

  return (
    <Box sx={style}>
      <Typography>Создание новой темы</Typography>
      <TextField
        name="new theme"
        label="Введите название темы"
        variant="filled"
        multiline
        maxRows={2}
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
        sx={{ width: '68%', m: 5 }}
      />
      <TextField
        name="new theme comment"
        label="Введите описание темы"
        variant="filled"
        multiline
        maxRows={2}
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(event.target.value)
        }
        sx={{ width: '68%', m: 5 }}
      />
      <Box sx={{ width: '90%', display: 'flex', flexDirection: 'row' }}>
        <Button type="submit" sx={{ width: '70%', m: 2 }} onClick={newTheme}>
          Создать
        </Button>
        <Button sx={{ width: '70%', m: 2 }} onClick={() => handleModal(false)}>
          Отмена
        </Button>
      </Box>
    </Box>
  )
}
