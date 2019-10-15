const express = require('express');
const server = express();

server.get('/', (req, res) =>{
  return res.json({ok: 'ok'})
})

server.listen(3333);