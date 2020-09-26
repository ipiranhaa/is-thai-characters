import isThaiCharacters from '../index'

const rightCases = [
  'คาแร็คเตอร์บึมโอเคสตีล',
  'หมั่นโถว หมิง วีน แจ็กพอต พล็อต ',
  'เยอบีราแฟล็ตตุ๋ย ไฟลต์โมเต็ลน้องใหม่ วีเจ แอพพริคอทตนเองผู้นำเวณิกาอพาร์ตเมนต์ โซนี่ด็อกเตอร์ออร์เดอร์ แก๊สโซฮอล์ห่วย โฮสเตส โปรดักชั่น มาร์ตโฮป ฮาร์ดโซนี่ มลภาวะลิสต์ จิตพิสัย ฟลุท สุริยยาตร์หมวย เชอร์รี่สคริปต์ เยอร์บีราซัมเมอร์ต่อรอง',
]

const wrongCases = [
  '',
  'คาแร็คเตอร์บึมโอเคสตีล alchemist ',
  'Helloสวัสดี',
  'เยอบีราแฟล็ตตุ๋ย ไฟลต์โมเต็ลน้องใหม่ (วีเจ)',
]

describe('isThaiCharacters', () => {
  it('should be Thai characters', () => {
    const results = rightCases.map((text) => isThaiCharacters(text))

    results.forEach((result) => expect(result).toBe(true))
  })

  it('should not be Thai characters', () => {
    const results = wrongCases.map((text) => isThaiCharacters(text))

    results.forEach((result) => expect(result).toBe(false))
  })

  // it('should return true', () => {
  //   const result0 = isThaiCharacters(rightCases[0])
  //   // const result1 = isThaiCharacters(rightCases[1])
  //   const result2 = isThaiCharacters(rightCases[2])

  //   expect(result0).toBe(true)
  //   // expect(result1).toBe(true)
  //   expect(result2).toBe(true)
  // })

  // it('should return false', () => {
  //   const result0 = isThaiCharacters(wrongCases[0])
  //   const result1 = isThaiCharacters(wrongCases[1])
  //   const result2 = isThaiCharacters(wrongCases[2])
  //   const result3 = isThaiCharacters(wrongCases[3])

  //   expect(result0).toBe(false)
  //   expect(result1).toBe(false)
  //   expect(result2).toBe(false)
  //   expect(result3).toBe(false)
  // })
})
