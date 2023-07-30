const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('../netlify/functions/credenciais.json')
const { JWT } = require('google-auth-library')

const serviceAccountAuth = new JWT({
  email: credenciais.client_email,
  key: credenciais.private_key.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

async function getSheet(spreadsheetId) {
  const doc = new GoogleSpreadsheet(
    spreadsheetId,
    serviceAccountAuth
  )

  await doc.loadInfo() // loads document properties and worksheets
  console.log(doc.title)
  // await doc.updateProperties({ title: "renamed doc" });

  const sheet = doc.sheetsByIndex[0] // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  // console.log(sheet.title);
  // console.log(sheet.rowCount);
  const rows = await sheet.getRows() // can pass in { limit, offset }
  // console.log(rows[0].get("Email"));
  const request = {
    contatos: rows.map((contato) => {
      return {
        properties: {
          company: contato.get('Nome da empresa'),
          email: contato.get('Email'),
          firstname: contato
            .get('Nome completo')
            .split(' ')
            .slice(0, -1)
            .join(' '),
          lastname: contato.get('Nome completo').split(' ').slice(-1).join(' '),
          phone: contato.get('Telefone'),
          website: contato.get('Website')
        }
      }
    })
  }
  return request.contatos
}

module.exports = {
  getSheet
}
