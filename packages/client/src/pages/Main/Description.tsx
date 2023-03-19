import { Box } from '@mui/material'
import { DoubleTypography } from '../../components/DoubleTypography'

export function Description() {
  return (
    <Box sx={{ mt: 5 }}>
      <DoubleTypography
        first={{ content: 'Как играть:' }}
        second={{
          content: ` Используйте клавиши со стрелками для перемещения плитки.
          Плитки с одинаковыми числами сливаются в одну при соприкосновении
          (их значения при этом сладываются).
          Передвигайте плитки, чтобы получить 2048`,
          color: 'green.dark',
        }}
        sx={{ fontSize: 16 }}
      />
    </Box>
  )
}
