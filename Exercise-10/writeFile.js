
const fs = require('fs');

fs.writeFile('iTzRusso10.txt', 'La vita è un avventura da vivere con coraggio e passione', (err) => {
    if(err) throw new Error;
    console.log("File scritto correttamente.")
})