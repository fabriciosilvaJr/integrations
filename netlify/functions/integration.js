const { main } = require('../../src/main')
exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body)
    await main(body.spreadsheetId, body.hubSpotPat)
    return {
      statusCode: 200,
      body: JSON.stringify('Contato adicionado com sucesso')
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Ocorreu um erro interno')
    }
  }
}
