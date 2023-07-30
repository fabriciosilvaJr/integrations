const { main } = require('../../src/main')
exports.handler = async function(event, context) {
  main()
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' })
  }
}
