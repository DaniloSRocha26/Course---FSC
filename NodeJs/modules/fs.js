const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("Pasta Criada com sucesso");
// });

// Criar um Arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }

    console.log("Arquivo criado com sucesso");

    // Adicionar a um Arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "hello World",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }

        console.log("Arquivo modificado com sucesso");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log(data);
      }
    );
  }
);
