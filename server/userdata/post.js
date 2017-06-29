const database = require('../database.js');

module.exports = (req, res) => {
    database.getCollection('userdata').then((db) =>
        db.insertOne({
            name: "Lou",
            sex: "Male",
            age: 12,
            country: "United Kingdom",
            dateCreated: new Date()
        })
        .then((data) => res.send({
            success: true,
            data: data
        }))
        .catch((err) => res.send({
            success: false,
            data: data
        }))
    );
};