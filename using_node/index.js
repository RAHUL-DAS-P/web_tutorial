const { error } = require("console");
const fs = require("fs");

fs.writeFile("message.txt", "first node app", (error) => {
    if (error) throw error ;

    console.log(error);
});

fs.readFile("./message.txt","utf8", (error, data) => {
    if (error) throw error ;
    console.log(data);
})