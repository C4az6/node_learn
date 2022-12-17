const fs = require('fs');

/* fs.readFile('./index.js', function (err, data) {
  console.log("error: ", err);
  console.log("data: ", data);
}); */

fs.watch('./', {
  recursive: true
}, (eventType, filename) => {
  console.log(eventType, filename);
});
