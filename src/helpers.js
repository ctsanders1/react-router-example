export function makeid() {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

export function randNum() {
  return Math.floor(Math.random() * 8)
}
