
const { GoogleSpreadsheet } = require("google-spreadsheet");
const credenciais = require("./credenciais.json");
const { JWT } = require("google-auth-library");

const serviceAccountAuth = new JWT({

  email: credenciais.client_email,
  key: credenciais.private_key.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function getSheet() {
  const doc = new GoogleSpreadsheet(
    "1eN6CRbDmb29s2YBv990Q1qc_aVUW_8O9hjv4IN7lncM",
    serviceAccountAuth
  );

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  // await doc.updateProperties({ title: "renamed doc" });

  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  console.log(sheet.title);
  console.log(sheet.rowCount);
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  console.log(rows[0].get("Email"));
  return rows;
}

module.exports = {
    getSheet

}
