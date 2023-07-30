const hubspot = require("@hubspot/api-client");

async function createContacts(contacts) {
    const hubspotClient = new hubspot.Client({
        accessToken: process.env.HUB_SPOT_API_KEY,
      });
      
  const request = {
    properties: {
      company: "teste2",
      email: "teste3@mail.com",
      firstname: "teste2",
      lastname: "teste2",
      phone: "(877) 929-0687",
      website: "biglytics.net",
    },
  };
  await hubspotClient.crm.contacts.basicApi.create(contacts);
}

module.exports = {
  createContacts,
};
