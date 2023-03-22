import { ChangeEvent } from 'react'
import { Box, Stack } from '@mui/material'
import { MapProfileInputFields } from './ProfileFieldsData'
import { ProfileFields } from './ProfileFields'
import { useInputsValidate } from '../../hooks/useInputsValidate'
import { validate } from '../../utils/formInputValidators/validate'
import { useAuth } from '../../hooks/useAuth'
import { deepEqual } from '../../utils/deepEqual'
import { ProfileFooter } from './ProfileFooter'
import { Button } from '../../components/Button'

interface ProfileMainProps {
  setModal: () => void
}

export function ProfileMain({ setModal }: ProfileMainProps) {
  const [{ user, userData, editStatus }, { updateUserData }] = useAuth()
  const { errors, handleInputBlur, clearErrors } = useInputsValidate(
    true,
    validate
  )

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
          {MapProfileInputFields.map(({ label, name }) => (
            <ProfileFields
              key={name}
              disabled={editStatus === 'info'}
              label={label}
              name={name}
              value={userData![name as keyof typeof userData]}
              handleInputChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateUserData({
                  ...userData!,
                  ...{ [name]: event.target.value as string },
                })
              }
              handleInputBlur={handleInputBlur}
              error={
                deepEqual(user, userData)
                  ? ''
                  : errors[name as keyof typeof errors]
              }
            />
          ))}
        </Stack>
      </Box>
      <Button onClick={setModal} sx={{ width: '40%' }}>
        Изменить пароль
      </Button>
      <ProfileFooter errors={errors} clearErrors={clearErrors} />
    </Box>
  )
}
