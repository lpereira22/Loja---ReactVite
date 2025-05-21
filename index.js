import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

app.use(function(req,res){

})

app.get("/",(req,res) => {

})

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
// const mongoose = require('mongoose');
// const fs = require('fs');

// // 1. Conexão com o MongoDB
// mongoose.connect('mongodb://localhost:27017/testeDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("✅ Conectado ao MongoDB");
//   inserirDados();
// }).catch(err => {
//   console.error("Erro ao conectar:", err);
// });

// // 2. Criar um Schema
// const Usuario = mongoose.model('Usuario', {
//   nome: String,
//   idade: Number,
//   email: String
// });

// // 3. Função para ler e inserir dados do db.json
// function inserirDados() {
//   fs.readFile('db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error("Erro ao ler db.json:", err);
//       return;
//     }

//     const usuarios = JSON.parse(data);

//     Usuario.insertMany(usuarios)
//       .then(() => {
//         console.log("✅ Dados inseridos com sucesso!");
//         mongoose.disconnect();
//       })
//       .catch((err) => {
//         console.error("Erro ao inserir dados:", err);
//       });
//   });
// }
