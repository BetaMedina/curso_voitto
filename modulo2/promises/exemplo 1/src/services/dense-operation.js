export const denseOperationWithPromisse = (numberLimit) => {
  return new Promise((resolve, reject) => {
    let i = 0
    const interval = setInterval(() => {
      console.log(i)
      if (i === numberLimit) {
        resolve("I'm finish my operation")
        clearInterval(interval)
      }
      i++
    }, 1000)
  })
}
