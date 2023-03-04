const fs = require('fs/promises');
const path = require('path');
const redis = require('redis');
const http = require('http');




// یادبگیرم که طوری درخواست گت و پوت و پست بفرستم

var id ='';
var data ='';
var parent='';
// wait for the requests to come:
const server = http.createServer ( 
    (request , respond) => {
        if (request.url === 'dataService') {

            if (request.method == 'POST' ) {
                /*post:  recieves id, data, parent => store these in id-parent & id-data DB
                        a: if succeed:
                        b: if ID was repetitive, "شناسه داده ها تکراری است"
                        c: if REDIS thew any err, "خطای پایگاه داده"
                */

            } else if (request.method == 'GET') {
                /* GET : recieves id & returns a json containing relative id-data-parent to the postman 
                        a: if succeed, send the json
                        b: if couldn't find the ID send "شناسه پیدا نشد"
                        c: if REDIS threw any error, send "خطای پایگاه داده" to postman
                */

            } else if (request.method == 'PUT') {
                /* PUT : in order to editting, recieves a JSON from postman, and sends one of these
                    a: if succeed: "داده ها بروز رسانی شد"
                    b: if REDIS threw any error "خطای پایگاه داده"
                    c: if USER/Postman sent any other kinda request, "درخواست معتبر نیست"
                */

            }
        } 
        // if (request.method == 'GET') {
        //     console.log(request.url);
        // }
    }
);
server.listen ( 81 , () => {
    console.log('server is listening'); 
    // since we're using a callback function, it's an ASYNC request and won't stop application 
})

// the test message below is printed "before" the above ones. cuz app doesn't wait for upper async_functions to get finnished
console.log('hello world');











// connecting to the DB:
const db = redis.createdb({
    socket: {
        host: '127.0.0.1',
        port: '6379'
    },
    password: ''
});


db.on('error', err => {
    console.log('Error ' + err);
});


// await must be within a function
(async function() {
         await db.connect()
        }
());



// write/import a new key-value to the DB
db.set('forka', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    db.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});



