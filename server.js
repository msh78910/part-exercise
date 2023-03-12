const fs = require('fs/promises');
const path = require('path');
const http = require('http');
const url = require('url');


function start (route, handle) {

    // wait for the requests to come:
    const server = http.createServer ( 
            (request , response) => {
                var pathname = url.parse(request.url).pathname;
                console.log ("pathname is " + pathname);
                route(handle, pathname, request, response);

        }
    );

    server.listen ( 81 , () => {
        console.log('server is listening...'); 
        // since we're using a callback function, it's an ASYNC request and won't stop application 
    })

    // the test message below is printed "before" the above ones. cuz app doesn't wait for upper async_functions to get finnished
    console.log('hello Mohammed!');
}

exports.start = start ;