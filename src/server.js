const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (requestAnimationFrame, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
          htmlHandler.getIndex(request, response);
          break;
          htmlHandler.getIndex(request, response);
          break;
      }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);