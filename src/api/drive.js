const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES_SHEET = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const SCOPES_FILES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];


const readFile = require("util").promisify(fs.readFile);


let selectedFileId = null;

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
async function authorize(credentials, callback, token_path) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  let token = null;
  let result = null;
  try { 
      token = await readFile(token_path)
      oAuth2Client.setCredentials(JSON.parse(token));
      result = callback(oAuth2Client);
  } catch (e) {
     getNewToken(oAuth2Client, callback, token_path);
  }

  return result;
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback, token_path) {
  let scope = null;
  if (token_path == "token-drive.json"){
      scope = SCOPES_FILES
  }else if (token_path == "token-sheet.json"){
    scope = SCOPES_SHEET
  }
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(token_path, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', token_path);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * 
 * @param {string} type type of google service drive or sheet
 */

async function init(type) {
  let token_path = null;
  if (type == "drive") {
    token_path = "token-drive.json"
    callback = listFiles;
  }else if (type == "sheet") {
    token_path = "token-sheet.json"
    callback = fetchData;
  }else {
    return
  }
  const content = await readFile('src/api/credentials.json')

  const data = await authorize(JSON.parse(content), callback, token_path);
  return data

}

async function fetchData(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  let listOfHospitals = null;

  try {

      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: selectedFileId,
        range: 'A1:H',
      });
      const rows = res.data.values;
      if (rows.length) {
         listOfHospitals = rows.map((row) => {
          return [row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]]
        });
      } else {
        console.log('No data found.');
      }
  
  } catch (e) {
    //handle error
    throw e;
  }
  return listOfHospitals;
  
}

/**
 * return list of files in drive
 * @param {oAuth2Client} auth 
 */
async function listFiles(auth) {
  const drive = google.drive({version: 'v3', auth});
  let listOfFiles = null;

  try {

      const res = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      });
    
      const files = res.data.files;
      if (files.length) {
        listOfFiles = files.map((file) => {
          return {"filename": file.name, "fileId": file.id}
        });
      } else {
        console.log('No files found.');
      }
  } catch (e) {
      //handle error 
      throw e;
  }

  return listOfFiles;
}

async function generateDriveToken(){
  await init("drive");
}

async function generateSheetToken(){
  await init("sheet");
}
/**
 * 
 * @param {string} filename get data from drive spreadsheet
 */
async function getData(filename) {
  const listOfFiles = await init("drive")
  const selectedFile = listOfFiles.filter(file => file["filename"] == filename)
  if (selectedFile.length == 0) {
    return "Sorry file do not exist in drive";
  }
  selectedFileId = selectedFile[0]["fileId"]
  return await init("sheet")
}

