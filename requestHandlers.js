//page 30
const redis = require('redis');
const exec = require('child_process');


function start () { //response
    console.log('request handler start was called');
}
function upload () {
    console.log('request handler upload was called');
}

function dataService (request, response) {

    // connecting to the DB:
    const db = redis.createClient({
        socket: {
            host: '127.0.0.1',
            port: '6379'
        },
        password: ''
    });
    console.log('> just created the Client Database');

    db.on ('error', err => { // or db.on (...{}) ;
        console.log('DataBase Error: ' + err);
    });

    // await must be within a function
    (async function() {
            await db.connect()
            }
    ());



    var id ='';
    var data ='';
    var parent='';

    if (request.method == 'POST' ) {
        /*post:  recieves id, data, parent => INSERTs these in id-parent & id-data DB
                a: if succeed:
                b: if ID was repetitive, "شناسه داده ها تکراری است"
                c: if REDIS thew any err, "خطای پایگاه داده"
            */
        console.log('some POST request recieved');

        id = 'body';
        data = 'dat';
        
        // write/import a new key-value to the DB
        db.set( id, data , (err, reply) => {
            // if (err) {
                // console.log(err);
                throw err;
            // }

            console.log(reply);
    
            // db.get(id, (err, reply) => {
            //     if (err) throw err;
            //     console.log(reply);
            // });
        });
        // db.set( id, data 
        //     ).then(res=>{
        //         console.log(res);
        //     }).catch(err);

        response.writeHead(200, {'Content-Type' : "text/plain"});
        response.write('Added to the DataBase');
        response.end();

    } else if (request.method == 'GET') {
        /* GET : recieves id & returns a json containing relative id-data-parent to the postman 
                a: if succeed, send the json
                b: if couldn't find the ID send "شناسه پیدا نشد"
                c: if REDIS threw any error, send "خطای پایگاه داده" to postman
            */
        console.log('some GET request recieved');


    } else if (request.method == 'PUT') {
        /* PUT : in order to editting, recieves a JSON from postman, and sends one of these
            a: if succeed: "داده ها بروز رسانی شد"
            b: if REDIS threw any error "خطای پایگاه داده"
            c: if USER/Postman sent any other kinda request, "درخواست معتبر نیست"
            */
        console.log('some PUT request recieved');


    }
}

exports.start = start;
exports.upload = upload;
exports.dataService = dataService;