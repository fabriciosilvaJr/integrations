const hubspot = require('@hubspot/api-client')

async function createContacts(contacts) {
  const hubspotClient = new hubspot.Client({
    accessToken: process.env.HUB_SPOT_API_KEY
  })

  for (let i = 0; i < contacts.length; i++) {
    await hubspotClient.crm.contacts.basicApi.create(contacts[i])
  }
}

module.exports = {
  createContacts
}
