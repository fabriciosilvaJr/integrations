const { getSheet } = require("./spreadsheet");
const { createContacts } = require("./hubspot");

require("dotenv").config();
const dominiosNaoPermitidos = ["@gmail.com", "@yahoo.com", "@outlook.com"];

async function main() {
  const contactsRow = await getSheet();
  const contactsLenght = contactsRow.length;
  const contatosFiltrados = contactsRow.filter((c) =>
    verificarSeEmailCorporativo(c.properties.email)
  );

  console.log(contatosFiltrados);
  await createContacts(contatosFiltrados,contactsLenght);
}


function verificarSeEmailCorporativo(email) {
    for (let dominioNaoPermitido of dominiosNaoPermitidos) {
      if (email.includes(dominioNaoPermitido)) {
        return false;
      }
    }
    return true;
  }
  

module.exports = { main };
