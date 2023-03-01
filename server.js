console.log('hello world');



const fs = require('fs/promises');
const path = require('path');
const redis = require('redis');



const client = redis.createClient({
    socket: {
        host: '127.0.0.1',
        port: '6379'
    },
    password: ''
});


client.on('error', err => {
    console.log('Error ' + err);
});


// await must be within a function
(async function() {
         await client.connect()
        }
());

// write/import a new key-value to the DB
client.set('forka', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    client.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});





