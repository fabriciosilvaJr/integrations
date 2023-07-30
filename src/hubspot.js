const hubspot = require("@hubspot/api-client");

async function createContacts(contacts, contactsLenght) {
    const hubspotClient = new hubspot.Client({
        accessToken: process.env.HUB_SPOT_API_KEY,
      });
      
 for (let i = 0; i < contactsLenght; i++) {
    await hubspotClient.crm.contacts.basicApi.create(contacts[i]);
    
 }
  
}

module.exports = {
  createContacts,
};
