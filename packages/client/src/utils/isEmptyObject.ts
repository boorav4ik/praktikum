export const isEmptyObjField = (obj: object) => {
  const keys = Object.getOwnPropertyNames(obj)
  if (!keys) return false

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    const elementAreObject = typeof obj[key as keyof typeof obj]

    if (elementAreObject !== 'object' && obj[key as keyof typeof obj] !== '') {
      return false
    }
    if (
      elementAreObject === 'object' &&
      isEmptyObjField(obj[key as keyof typeof obj])
    ) {
      return false
    }
  }
  return true
}
