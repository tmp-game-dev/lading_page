
export const textShortener =
  ({ charsEnd = 10, charsStart = 10, ellipsis = '...' } = {}) =>
  (text = ''): string => {
    const amountOfCharsToKeep = charsEnd + charsStart
    const finalStringLength = amountOfCharsToKeep + ellipsis.length

    if (finalStringLength >= text.length || !amountOfCharsToKeep) {
      return text
    }

    const r = new RegExp(`^(.{${charsStart}}).+(.{${charsEnd}})$`)
    const matchResult = r.exec(text)

    if (!matchResult) {
      return text
    }

    const [, textStart, textEnd] = matchResult

    return `${textStart}${ellipsis}${textEnd}`
  }

export default textShortener;  


// kradeno možná citace?


