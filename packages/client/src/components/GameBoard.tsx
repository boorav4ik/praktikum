import Box from '@mui/material/Box'
import { Canvas } from '../game/components/Canvas'
import { useEffect, useState } from 'react'
import { EndGameDialog } from '../game/components/EndGameDialod'
import { useArrow } from '../game/hooks/useArrow'
import { Nullable } from '../utils/nullableType'
import { Typography } from '@mui/material'
import { ArrowDirection } from '../game/utils/ArrowDirections'
import { transformations } from '../game/utils/Transformations'
import { moveCells } from '../game/utils/moveCells'
import { checkGameIsOver } from '../game/utils/checkGameIsOver'
import { addNewCell } from '../game/utils/addNewCels'
import { initCells } from '../game/utils/initCells'

const guide = [
  { header: 2048, footer: 'Используйте стрелки на клавиатуре, чтобы начать' },
  { header: 'Знакомьтесь', footer: 'Используй стрелки' },
  { header: 'Передвигайте числа', footer: 'Пододвинте йх к стене' },
  { header: 'Объедините числа', footer: 'Используй стену' },
  { header: 'Так держать!!!' },
  { header: 'Сейчас появятся новые числа', footer: 'Используй стрелки' },
  { header: 'Уже почти', footer: 'Используй стрелки' },
  { header: 'Загрузка модуля MATH....', footer: 'Используй стрелки' },
  {
    header: 'Проверка простых чисел на простоту...',
    footer: 'Используй стрелки',
  },
  { header: '2 + 2 = 4', footer: '4 + 4 = 8' },
  { header: 'Передвигайте числа', footer: '4 + 4 = 8' },
  { header: 'У вас отлично получается' },
  { header: 'Продолжайте', footer: 'чтоб получить 2048' },
]

const guideInit = (() => {
  const output = Array(16)
  output[5] = 2
  output[10] = 2
  return output
})()

export function GameBoard() {
  const [cells, setCells] = useState(Array(16))
  const [score, setScore] = useState<Nullable<number>>(null)
  const [guideStep, setGuideStep] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  useArrow(direction => (!guideStep ? setGuideStep(1) : move(direction)))
  console.log(guideStep)

  function move(direction: ArrowDirection) {
    const transform = transformations.getTransformation(direction)
    const { output, movedLayers } = moveCells(cells, transform)
    if (guideStep) {
      if (!movedLayers) return setIsGameOver(checkGameIsOver(output))
      if (guideStep === 1) setGuideStep(2)
    }
    if (guideStep === 2) {
      const firstIndex = output.indexOf(2)
      const secondIndex = output.indexOf(2, firstIndex)
      if (
        [
          [0, 1, 2, 3],
          [0, 4, 8, 12],
          [3, 7, 11, 15],
          [12, 13, 14, 15],
        ].some(
          layer => layer.includes(firstIndex) && layer.includes(secondIndex)
        )
      ) {
        setGuideStep(3)
      }
    }

    if (
      [3, 10].includes(guideStep) &&
      output.filter(value => value).length === 1
    ) {
      setGuideStep(guideStep => guideStep + 1)
    }

    if ([4, 5, 6, 7, 9, 11].includes(guideStep) && movedLayers.size)
      setGuideStep(guideStep => guideStep + 1)

    if (guideStep === 8) {
      addNewCell(output, movedLayers, transform, 4)
      setGuideStep(9)
    }

    if (guideStep > 11) addNewCell(output, movedLayers, transform)
    setCells(output)
  }

  function onRestart() {
    setCells(initCells)
    setIsGameOver(false)
  }

  useEffect(() => {
    if (guideStep > 13)
      setScore(cells.reduce((score = 0, cell = 0) => score + cell))
  }, [...cells])

  useEffect(() => {
    switch (guideStep) {
      case 1:
        return setCells(guideInit)
    }
  }, [guideStep])

  return (
    <>
      <Typography
        sx={{
          minHeight: 40,
          fontSize: 24,
        }}>
        {guide[guideStep].header ?? ''}
      </Typography>

      <Box
        bgcolor="background.paper"
        sx={{
          height: 520,
          width: 520,
          borderRadius: 16,
          border: `4px solid ${[2, 3].includes(guideStep) ? 'red' : '#1E515D'}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Canvas cells={cells} />
        <EndGameDialog
          open={isGameOver}
          score={score ?? 0}
          onRestartClick={onRestart}
        />
      </Box>
      <Typography
        sx={{
          minHeight: 40,
          fontSize: 24,
        }}>
        {guide[guideStep].footer ?? ''}
      </Typography>
    </>
  )
}
