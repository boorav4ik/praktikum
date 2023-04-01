import { Box, Typography } from '@mui/material'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { Button } from 'components/Button'
import { MapPasswordInputFields } from '../ProfileFieldsData'
import { TextField } from 'components/TextFields'

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
interface ProfileChangePasswordProps {
  handleModal: (state: boolean) => void
  handleChangePassword: (data: {
    oldPassword: string
    newPassword: string
  }) => void
}

interface ProfileChangePasswordValues {
  list: {
    label: string
    value: string
    validation: object
    type: string
  }[]
}

export function ProfileChangePassword({
  handleModal,
  handleChangePassword,
}: ProfileChangePasswordProps) {
  const { handleSubmit, control, watch } = useForm<ProfileChangePasswordValues>(
    {
      mode: 'onBlur',
      defaultValues: {
        list: MapPasswordInputFields,
      },
    }
  )
  const { errors } = useFormState({ control })
  const { fields } = useFieldArray({
    control,
    name: 'list',
  })

  function changePassword(data: ProfileChangePasswordValues) {
    handleChangePassword({
      oldPassword: data.list[0].value,
      newPassword: data.list[1].value,
    })
  }

  return (
    <Box sx={style} component="form" onSubmit={handleSubmit(changePassword)}>
      <Typography>Смена пароля</Typography>
      {fields.map(({ id, label, validation, type }, index) => {
        return (
          <Controller
            key={id}
            control={control}
            name={`list.${index}.value`}
            rules={validation}
            render={({ field }) => (
              <TextField
                {...field}
                inputRef={field.ref}
                label={label}
                type={type}
                variant="outlined"
                sx={{ width: '90%', m: 2, mt: 4, height: 40 }}
                margin="normal"
                value={field.value || ''}
                error={!!(errors?.list ?? [])[index]?.value?.message}
                helperText={(errors?.list ?? [])[index]?.value?.message}
                inputProps={{ style: { height: 5 } }}
                InputLabelProps={{ style: { top: -7, marginTop: 0 } }}
                FormHelperTextProps={{
                  style: { height: 0, marginTop: -1, zIndex: 999 },
                }}
              />
            )}
          />
        )
      })}
      <Button type="submit" sx={{ width: '70%', m: 5 }}>
        Изменить
      </Button>
      <Button sx={{ width: '70%' }} onClick={() => handleModal(false)}>
        Отмена
      </Button>
    </Box>
  )
}
