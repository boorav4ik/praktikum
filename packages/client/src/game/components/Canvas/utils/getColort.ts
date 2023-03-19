export function getColor(value: number) {
  switch (value) {
    case 0:
      return '#5FD3C6'
    case 2:
      return '#83DED3'
    case 4:
      return '#93E1D8'
    case 8:
      return '#FFA69E'
    case 16:
      return '#D57582'
    case 32:
      return '#AA4465'
    case 64:
      return '#982D5E'
    case 128:
      return '#861657'
    case 256:
      return '#8C215F'
    case 512:
      return '#912B66'
    case 1024:
      return '#6E214E'
    case 2048:
      return '#4F1738'
    case 4096:
      return '#2F0E21'
    case 8192:
      return '#10050B'
    default:
      return '#fff'
  }
}
