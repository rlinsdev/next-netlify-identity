exports.handler = async (event, context) => {
  const guides = [
    { title: 'Beat all Zelda bosses like a boss', author: 'Mario' },
    { title: 'Mario Kart Shortcuts you never knew exist', author: 'luigi' },
    { title: 'Ultimate street fighter Guide', author: 'Chun-li' }
  ]

  return {
    statusCode: 200,
    body: JSON.stringify(guides)
  }
}
