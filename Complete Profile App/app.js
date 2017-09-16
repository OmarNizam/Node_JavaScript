const https = require('https');
// Function to print message to the console

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} poimts in JavaScript`;
  console.log(message);
}
// printMessage("Omar Nizam Aldeen", 100, 2000000);

function getProfile(username) {
// Connect to the api url ('https://teamtreehouse.com/username.json')
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    //console.dir(response);
    console.log(response.statusCode); // if 200 it's mean that the web request was successful and we able to connect to the API url
    // Read the data
    let body = "";
    response.on('data', data => {
      body += data.toString();
    });

    // the end event
    response.on('end', () => {
      //Parse the data  : converting string to data structure
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });


    //Print the data

  });
}
//getProfile("omarnizamaldeen");
//getProfile("chalkers");
const users = ["chalkers", "omarnizamaldeen"];
users.forEach( username => {
  getProfile(username);
});
