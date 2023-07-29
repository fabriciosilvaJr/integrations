const { getSheet } = require("./spreadsheet");
require("dotenv").config();

async function main() {

    const contactRows = await getSheet();
    console.log(contactRows)
    

   
}

module.exports = { main}