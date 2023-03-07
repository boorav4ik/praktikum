import { useEffect, useRef, useState, useCallback, memo } from 'react';

function cell(row: number, col: number, width: number) {
  const value = 0
  const x = col * width + 5 * (col + 1)
  const y = row * width + 5 * (row + 1)

  return {
    value,
    x,
    y,
  }
}

function createCells(size: number, width: number) {
  const result: any = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];

    for (let j = 0; j < size; j++) {
      result[i][j] = cell(i, j, width);
    }
  }

  return result;
}


function canvasDrawCells(cell: { [key: string]: number }, ctx: CanvasRenderingContext2D, width: number) {
  ctx.beginPath();

  ctx.rect(cell.x, cell.y, width, width);

  const fontColor = '#fff';

  ctx.fillStyle = 'rgb(135, 200, 116)';

  switch (cell.value) {
    case 0:
      ctx.fillStyle = 'rgb(135, 200, 116)';
      break;
    case 2:
      ctx.fillStyle = 'rgb(135, 200, 116)';
      break;
    case 4:
      ctx.fillStyle = 'rgb(95, 149, 212)';
      break;
    case 8:
      ctx.fillStyle = 'rgb(139, 89, 177)';
      break;
    case 16:
      ctx.fillStyle = 'rgb(229, 195, 81)';
      break;
    case 32:
      ctx.fillStyle = 'rgb(202, 77, 64)';
      break;
    case 64:
      ctx.fillStyle = 'rgb(108, 129, 112)';
      break;
    default: 
      ctx.fillStyle = 'rgb(135, 200, 116)';
  }

  ctx.fill()

  if (cell.value) {
    const fontSize = width / 2;
    ctx.font = fontSize + 'px Raleway';
    ctx.fillStyle = fontColor;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(String(cell.value), cell.x + width / 2, cell.y + width / 1.5);
  }
}

function displayCells(cells: any, ctx: CanvasRenderingContext2D, size: number, width: number) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      canvasDrawCells(cells[i][j], ctx, width);
    }
  }
}

function moveRight(cells: any, ctx: CanvasRenderingContext2D, setCells: any, size: number, width: number, score: number, setScore: any) {
  let col;
  for (let i = 0; i < size; i++) {
    for (let j = size - 2; j >= 0; j--) {
      if (cells[i][j].value) {
        col = j;
        while (col + 1 < size) {
          if (!cells[i][col + 1].value) {
            cells[i][col + 1].value = cells[i][col].value;
            cells[i][col].value = 0;
            col++;
          } else if (cells[i][col].value == cells[i][col + 1].value) {
            cells[i][col + 1].value *= 2;
            score += cells[i][col + 1].value;
            setScore(score);
            cells[i][col].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }

  randomPasteNewCells(cells, ctx, setCells, size, width);
}

function moveLeft(cells: any, ctx: CanvasRenderingContext2D, setCells: any, size: number, width: number, score: number, setScore: any) {
  let col;
  for (let i = 0; i < size; i++) {
    for (let j = 1; j < size; j++) {
      if (cells[i][j].value) {
        col = j;
        while (col - 1 >= 0) {
          if (!cells[i][col - 1].value) {
            cells[i][col - 1].value = cells[i][col].value;
            cells[i][col].value = 0;
            col--;
          } else if (cells[i][col].value == cells[i][col - 1].value) {
            cells[i][col - 1].value *= 2;
            score += cells[i][col - 1].value;
            setScore(score);
            cells[i][col].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }

  randomPasteNewCells(cells, ctx, setCells, size, width);
}

function moveUp(cells: any, ctx: CanvasRenderingContext2D, setCells: any, size: number, width: number, score: number, setScore: any) {
  let row;
  for (let j = 0; j < size; j++) {
    for (let i = 1; i < size; i++) {
      if (cells[i][j].value) {
        row = i;
        while (row > 0) {
          if (!cells[row - 1][j].value) {
            cells[row - 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row--;
          } else if (cells[row][j].value == cells[row - 1][j].value) {
            cells[row - 1][j].value *= 2;
            score += cells[row - 1][j].value;
            setScore(score);
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }

  randomPasteNewCells(cells, ctx, setCells, size, width);
}

function moveDown(cells: any, ctx: CanvasRenderingContext2D, setCells: any, size: number, width: number, score: number, setScore: any) {
  let row;
  for (let j = 0; j < size; j++) {
    for (let i = size - 2; i >= 0; i--) {
      if (cells[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells[row + 1][j].value) {
            cells[row + 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row++;
          } else if (cells[row][j].value == cells[row + 1][j].value) {
            cells[row + 1][j].value *= 2;
            score += cells[row + 1][j].value;
            setScore(score);
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  randomPasteNewCells(cells, ctx, setCells, size, width);
}

function randomPasteNewCells(cells: any, ctx: CanvasRenderingContext2D, setCells: any, size: number, width: number) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    if (!cells[row][col].value) {
      cells[row][col].value = 2 * Math.ceil(Math.random() * 2);
      setCells(cells);
      displayCells(cells, ctx, size, width);
      return;
    }
  }
}

type CellsType = { [key: string]: number }[];

export function GameField(props: any) {
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(4);
  const [width, setWidth] = useState(500 / size - 6);
  const [isLoss, setIsloss] = useState(false);

  const canvasCells: any = useCallback(() => createCells(size, width), []);

  const [cells, setCells] = useState<CellsType>(canvasCells);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = (ref.current as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;

      displayCells(cells, ctx, size, width);

      randomPasteNewCells(cells, ctx, setCells, size, width);

      // eslint-disable-next-line no-inner-declarations
      function moveCells(event: KeyboardEvent) {
        if (event.code === 'ArrowUp') {
          moveUp(cells, ctx, setCells, size, width, score, setScore);
        }

        if (event.code === 'ArrowRight') {
          moveRight(cells, ctx, setCells, size, width, score, setScore);
        }

        if (event.code === 'ArrowDown') {
          moveDown(cells, ctx, setCells, size, width, score, setScore);
        }

        if (event.code === 'ArrowLeft') {
          moveLeft(cells, ctx, setCells, size, width, score, setScore);
        }

        props.updateScore(score);
      }

      window.addEventListener('keydown', moveCells);

      return () => {
        window.removeEventListener('keydown', moveCells);
      };
    }
  }, [cells, score])

  return <canvas ref={ref} width={500} height={500} />
}
