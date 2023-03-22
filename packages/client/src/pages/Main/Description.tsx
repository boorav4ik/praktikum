import { Box } from '@mui/material'
import { DoubleTypography } from '../../components/DoubleTypography'

export function Description() {
  return (
    <Box sx={{ mt: 5 }}>
      <DoubleTypography
        first={{ content: 'Как играть:' }}
        second={{
          content: ` Используйте клавиши со стрелками для перемещения плиток.
          Плитки с одинаковыми числами сливаются в одну при соприкосновении
          (их значения при этом складываются).
          Передвигайте плитки, чтобы получить максимальный результат`,
          color: 'green.dark',
        }}
        sx={{ fontSize: 16 }}
      />
    </Box>
  )
}
