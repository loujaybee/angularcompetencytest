var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/angulartest'

module.exports = {
    getCollection: (collection) => {
        return MongoClient.connect(url)
            .then((db) => db.collection(collection))
    }
}
