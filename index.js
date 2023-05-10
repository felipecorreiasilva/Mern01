const express = require('express')
const userRouter = require("./src/routes/user.route")

const app = express()
// ROTA
 // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
  // GET - Pega um info
  // POST - Cria uma info
  // PUT - Altera toda a info
  // PATH - Altera parte da info
  // DELETE - Apaga uma info

 // Name - Um Identificador da Rota

 // function (callback) - Responsavel por executar algum comando
app.use("/soma", userRouter)

app.listen(3000)