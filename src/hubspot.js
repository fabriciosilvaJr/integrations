async function createContacts(hubspotClient, contacts) {
  for (let i = 0; i < contacts.length; i++) {
    try {
      await hubspotClient.crm.contacts.basicApi.create(contacts[i])
    } catch (error) {
      if (error.body && error.body.category === 'CONFLICT') {
        console.log(`${contacts[i].properties.email} não inserido, verifique por email já inserido`)
      } else {
        console.error(error)
      }
    }
  }
}

module.exports = {
  createContacts
}
