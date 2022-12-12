var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;


app.use(express.static(__dirname+'/public'))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors())

//mongoDB action

const MongoClient = require('mongodb').MongoClient;

//add database connection

const uri = 'mongodb+srv://96azma:Azmah1996@cluster0.hk8jelx.mongodb.net/?retryWrites=true&w=majority'
const Client = new MongoClient(uri, {useNewUrlPaser: true})

const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);

        if(!err) {
            console.log('MongoDB Connected')
        }
        else {

            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

const cardList = [

    {

        title: "Kitten 2",

        image: "images/img-01.jpg",

        link: "About Kitten 2",

        desciption: "Demo desciption about kitten 2"

    },

    {

        title: "Kitten 3",

        image: "images/img-01.jpg",

        link: "About Kitten 3",

        desciption: "Demo desciption about kitten 3"

    }

]



app.get('/api/projects',(req,res) => {

    res.json({statusCode: 200, data: cardList, message:"Success"})

})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
    createColllection("pets")
})