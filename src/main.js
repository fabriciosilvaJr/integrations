const { getSheet } = require("./spreadsheet")
async function main() {

    const contactRows = await getSheet();
    console.log(contactRows)
    

   
}

module.exports = { main}