export function getColor(value: number) {
  switch (value) {
    case 2:
      return '#7AB3A2'
    case 4:
      return '#9AADA8'
    case 8:
      return '#B3A8A0'
    case 16:
      return '#6A9B9B'
    case 32:
      return '#3E6E7A'
    case 64:
      return '#1E515D'
    case 128:
      return '#636277'
    case 256:
      return '#444666'
    case 512:
      return '#2C2A4C'
    case 1024:
      return '#232037'
    case 2048:
      return '#512D38'
    case 4096:
      return '#2F0E21'
    case 8192:
      return '#10050B'
    default:
      return '#92CCBB'
  }
}
