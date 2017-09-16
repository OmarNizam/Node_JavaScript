const https = require('https');
// Function to print message to the console
const username = "omarnizamaldeen";

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} poimts in JavaScript`;
  console.log(message);
}
// printMessage("Omar Nizam Aldeen", 100, 2000000);

// Connect to the api url ('https://teamtreehouse.com/username.json')
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.dir(response);
  //console.log(response.statusCode);
  // Read the data
  //Parse the data
  //Print the data

});
