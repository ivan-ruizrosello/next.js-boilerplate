const express = require('express'),
  server = express()
  PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log(process.env.NODE_ENV)
  console.log(`Server started on port ${PORT}`)
});

exports.server = server;
