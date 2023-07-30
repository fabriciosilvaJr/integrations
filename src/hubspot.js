async function createContacts(hubspotClient, contacts) {
  for (let i = 0; i < contacts.length; i++) {
    await hubspotClient.crm.contacts.basicApi.create(contacts[i])
  }
}

module.exports = {
  createContacts
}
