// const requestHandlers = require('./requestHandlers');

function route (handle, pathname, request, response) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') { // checks it out if such a thing is a funciton

        // if (request.url === 'dataService')
        // ... 
        handle[pathname](request, response);

    } else {
        console.log("No such request was found for " + pathname + ". There is no function to handle that")
        response.writeHead(404, {'Content-Type' : "text/plain"});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;



// نحوه صدا زدن تابع ها در درن then
// const welcome = new Promise(function (resolve, reject) {
//   resolve("Hello");
// });

// welcome
//   .then(res1 => res1.split(""))      // ["H", "e", "l", "l", "o"]
//   .then(res2 => res2.reverse())      // ["o", "l", "l", "e", "H"]
//   .then(res3 => res3.join(""))       // olleH
//   .then(res4 => alert(res4));        // olleH