exports.handler = async () => {
  const data = { name: 'Mario', age: 35, job: 'plumber' }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
