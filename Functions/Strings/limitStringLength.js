function limitStringCharLength(text, charLim = 10) {
  const arr = [...text]

  const newStr = arr.reduce((prev, curr, i) => {

    const shouldBr = i && i % charLim === 0
    
    return prev += shouldBr ? `${curr}\n` : curr 
  }, '')

  return newStr
  
}

function limitStringWordNumber(text, wordLim = 5) {
  const arr = text.split(' ')

  const newStr = arr.reduce((prev, curr, i) => {

    const shouldBr = i && (i + 1) % wordLim === 0

    return prev += shouldBr ? ` ${curr}\n` : ` ${curr}` 
  }, '')

  return newStr
}
