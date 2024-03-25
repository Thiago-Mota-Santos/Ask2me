export const fiatFormat = (number: number) => {
    const numberRounded = Math.round(number * 100) / 100
    const numberFormatted = numberRounded.toFixed(2)
    const value = numberFormatted.replace('.', ',')
  
    return value
}
  