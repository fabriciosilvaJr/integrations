const { getSheet } = require("./spreadsheet");
const { createContacts } = require("./hubspot")

require("dotenv").config();

async function main() {

    const contactsRow = await getSheet();
    const contactsLenght= contactsRow.length ;
    await createContacts(contactsRow,contactsLenght);
 
   
}

module.exports = { main}