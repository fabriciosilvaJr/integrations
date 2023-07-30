async function createContacts(hubspotClient, contacts) {
  for (let i = 0; i < contacts.length; i++) {
    try {
      await hubspotClient.crm.contacts.basicApi.create(contacts[i])
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  createContacts
}
