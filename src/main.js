const { getSheet } = require('./spreadsheet')
const { createContacts } = require('./hubspot')
const hubspot = require('@hubspot/api-client')

require('dotenv').config()
const dominiosNaoPermitidos = ['@gmail.com', '@yahoo.com', '@outlook.com']

async function main(spreadsheetId, hubSpotPat) {
  const contactsRow = await getSheet(process.env.SPREADSHEET_ID || spreadsheetId)
  const contatosFiltrados = contactsRow.filter((c) =>
    verificarSeEmailCorporativo(c.properties.email)
  )
  const hubspotClient = new hubspot.Client({
    accessToken: process.env.HUB_SPOT_API_KEY || hubSpotPat
  })

  await createContacts(hubspotClient, contatosFiltrados)
}

function verificarSeEmailCorporativo(email) {
  for (const dominioNaoPermitido of dominiosNaoPermitidos) {
    if (email.includes(dominioNaoPermitido)) {
      return false
    }
  }
  return true
}

module.exports = { main }
