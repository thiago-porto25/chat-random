export const pxToNumber = (withPx: string): number => {
  const number = Number(withPx.replace("px", ""))

  if (isNaN(number))
    throw new Error(
      "Invalid argument - should be a string and follow the pattern '12px'"
    )

  return number
}
