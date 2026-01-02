const path = require("path");

// Basename
console.log(path.basename(__filename));

//Nome do Diretório atual
console.log(path.dirname(__filename));

//Extensão do Arquivo
console.log(path.extname(__filename));

//Criar Objeto Path
console.log(path.parse(__filename));

// Juntar Caminhos de Arquivos
console.log(path.join(__dirname, "test", "test.html"));
