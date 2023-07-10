const { log } = require('console');
const fs = require('fs');

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     console.log(err, data);
// })

const a = fs.readFileSync("file.txt");

fs.writeFile("file2.txt", "File 2 is here", ()=> {
    console.log("written to the file");
});

console.log(a.toString());

console.log("Finish reading file");