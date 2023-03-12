const server = require('./server');
const router = require('./router');
const requestHandlers = require ("./requestHandlers");


// herein we must introduce all kanda requests. but in the router app will decide which to handle
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/dataService"] = requestHandlers.dataService;

server.start (router.route , handle);