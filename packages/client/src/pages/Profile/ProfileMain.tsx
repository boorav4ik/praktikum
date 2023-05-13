import { Box, Stack } from '@mui/material'
import { MapProfileInputFields } from './ProfileFieldsData'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { useAuth } from 'hooks/useAuth'
import { ProfileFooter } from './ProfileFooter'
import { Button } from 'components/Button'
import { User } from 'storeAuth/interfaces'
import { ChangeEvent, useEffect } from 'react'
import { TextField } from 'components/TextFields'

interface ProfileMainProps {
  setModal: () => void
}

interface ProfileValues extends User {
  list: {
    name: string
    label: string
    value: string
    validation: object
    disabled: boolean
    type: string
  }[]
}

export function ProfileMain({ setModal }: ProfileMainProps) {
  const [{ user, userData, editStatus }, { updateUserData }] = useAuth()

  const { reset, control } = useForm<ProfileValues>({
    mode: 'onBlur',
    defaultValues: {
      list: MapProfileInputFields.map(data => ({
        ...data,
        value: userData![data.name as keyof typeof userData],
      })),
    },
  })
  const { errors, isValid } = useFormState({ control })
  const { fields } = useFieldArray({
    control,
    name: 'list',
  })

  useEffect(() => {
    if (editStatus === 'cancel') {
      reset({
        list: MapProfileInputFields.map(data => ({
          ...data,
          value: user![data.name as keyof typeof userData],
        })),
      })
    }
  }, [editStatus])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          p: 3,
          width: '95%',
        }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}>
          {fields.map(({ id, name, label, validation, type }, index) => (
            <Controller
              key={id}
              control={control}
              name={`list.${index}.value`}
              rules={validation}
              render={({ field: { value, ...field } }) => (
                <TextField
                  {...field}
                  value={value ?? undefined}
                  inputRef={field.ref}
                  label={label}
                  type={type}
                  disabled={editStatus === 'info'}
                  variant="outlined"
                  sx={{ width: '48%', height: 80 }}
                  margin="normal"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => (
                    field.onChange(event),
                    updateUserData({
                      ...userData!,
                      ...{ [name]: event.target.value },
                    })
                  )}
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
          ))}
        </Stack>
      </Box>
      <Button onClick={setModal} sx={{ width: '40%' }}>
        Изменить пароль
      </Button>
      <ProfileFooter isValid={isValid} />
    </Box>
  )
}
