import { Box } from '@mui/material'
import { DoubleTypography } from './DoubleTypography'

export function Description({ text }: { text: string }) {
  return (
    <Box sx={{ mt: 5 }}>
      <DoubleTypography
        first={{ content: text }}
        second={{ content: '' }}
        // second={{
        //   content: ` Используйте клавиши со стрелками для перемещения плиток.
        //   Плитки с одинаковыми числами сливаются в одну при соприкосновении
        //   (их значения при этом складываются).
        //   Передвигайте плитки, чтобы получить максимальный результат`,
        //   color: 'green.dark',
        // }}
        sx={{ fontSize: 16 }}
      />
    </Box>
  )
}
