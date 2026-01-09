// console.log("Hello World");
// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect.js");

dotenv.config();

connectToDataBase();

// //require("./modules/path.js");
// //require("./modules/fs.js");
// //require("./modules/http.js");

require("./modules/express.js");

// //Apenas o nome do arquivo atual
// const person = new Person("Felipe");
