const isThaiCharacters = (input: string) => {
  if (!input) return false

  const thaiRegex = /^[ก-๙\s]+$/g
  return thaiRegex.test(input.trim())
}

export default isThaiCharacters
