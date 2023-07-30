const { getSheet } = require("./spreadsheet");
const { createContacts } = require("./hubspot")

require("dotenv").config();

async function main() {

    const contactsRow = await getSheet();

    console.log(contactsRow)
    

   
}

module.exports = { main}