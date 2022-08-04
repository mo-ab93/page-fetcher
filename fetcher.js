
const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (err, response, content) => {
  if (err) {
    console.log('error:', err); // Print the error if one occurred

  }
  fs.writeFile(`${path}`, content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
  });
  
});
