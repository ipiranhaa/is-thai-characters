const thaiRegex = /^[ก-๙\s]+$/g

const isThaiCharacters = (input: string) => {
  if (!input) return false
  return thaiRegex.test(input.trim())
}

export default isThaiCharacters
