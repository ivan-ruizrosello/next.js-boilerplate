const express = require('express'),
  server = express()
  PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if(err) throw err;
  
  console.log(`Server started on port ${PORT} (http://localhost:${PORT})`)
});

exports.server = server;