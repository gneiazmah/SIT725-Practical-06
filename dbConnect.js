require('dotenv').config()

//mongoDB action

const MongoClient = require('mongodb').MongoClient;

//add database connection

const uri = 'mongodb+srv://96azma:Azmah1996@cluster0.hk8jelx.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {

        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.MongoClient = client;