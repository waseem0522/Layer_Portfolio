var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const database = 'school'
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('class')
}

module.exports = dbConnect;