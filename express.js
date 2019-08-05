//Creates an Express application. The express() function is a top-level function exported by the express module.
let express = require('express')
let app = express()
// This line does the job of importing the fs package and allowing us to utilize it within our own code.
let fs = require('fs')
let data = "Hello from express";
// The above code will successfully create new files for you should the path to the file not already exist. This is handy as it means you can succinctly create, and write to a new file in one promise.
fs.writeFile("hello.txt", data, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

app.get('/', function (req, res) {
    // This calls the readFile function asynchronously and then prints the contents of the file to the console
    fs.readFile("hello.txt", "utf-8", (err, data) => {
        if (err) console.log(err);
        console.log("Successfully Read from File.");
        console.log(data);
        res.send(data);
        res.end();
      });
})
app.listen(3000)