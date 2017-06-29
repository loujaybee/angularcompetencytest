const database = require('../database.js');

module.exports = (req, res) => {
    database.getCollection('userdata').then((db) =>
        db.insertOne({
            name: req.body.name,
            sex: req.body.sex,
            age: req.body.age,
            country: req.body.country
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