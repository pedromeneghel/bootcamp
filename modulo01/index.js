const express = require('express');
const server = express();

server.use(express.json());

const users = [ 'Pedro', 'Valentina', 'Pietra', 'Elisete', 'Guilherme' ];

// Middleware global
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.log('Finalizou');
  console.timeEnd('Request');
})

// Middleware local
function checkUserExistis(req, res, next) {
  if(!req.body.nome){
    return res.status(400).json({error: 'User not found on request body'});
  }

  return next();
}

function checkUserInArray(req, res, next){
  const user = users[req.params.index]
  if (!user) {
    return res.status(400).json({error: 'User does not existis'});
  }

  // Um middleware pode criar uma variável na requisição
  req.user = user;

  return next();
}

// Rotas
server.post('/users', checkUserExistis, (req, res) =>{
  const { nome } = req.body;
  
  users.push(nome)

  return res.json(users)
})

server.put('/users/:index', checkUserInArray, checkUserExistis, (req, res) =>{
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;

  return res.json(users)
})

server.delete('/users/:index', checkUserInArray, (req, res) =>{
  const { index } = req.params;

  //Percorre o vetor até achar o indice informado e dele qtd de posições informadas
  users.splice(index, 1);
  return res.send()
})


server.get('/users', (req, res) =>{
  return res.json(users)
})

server.get('/users/:index', checkUserInArray, (req, res) =>{
  /*
  const { index } = req.params;
  return res.json({message: `Olá ${users[index]}`})
  ou
  */
  return res.json({message: `Olá ${req.user}`})
})

server.listen(3333);