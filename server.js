const fs = require('fs/promises');
const path = require('path');
const redis = require('redis');


console.log('hello world');


// یادبگیرم که طوری درخواست گت و پوت و پست بفرستم

// wait till the request comes:

/*post:  recieves id, data, parent => store these in id-parent & id-data DB
{

    a: if succeed:
    b: if ID was repetitive, "شناسه داده ها تکراری است"
    c: if REDIS thew any err, "خطای پایگاه داده"
} */

/* GET : recieves id & returns a json containing relative id-data-parent to the postman {

    a: if succeed, send the json
    b: if couldn't find the ID send "شناسه پیدا نشد"
    c: if REDIS threw any error, send "خطای پایگاه داده" to postman
} */

/* PUT : in order to editting, recieves a JSON from postman, and sends one of these {
    
    a: if succeed: "داده ها بروز رسانی شد"
    b: if REDIS threw any error "خطای پایگاه داده"
    c: if USER/Postman sent any other kinda request, "درخواست معتبر نیست"
} */




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

var id ='';
var data ='';
var parent='';

// write/import a new key-value to the DB
db.set('forka', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    db.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});



