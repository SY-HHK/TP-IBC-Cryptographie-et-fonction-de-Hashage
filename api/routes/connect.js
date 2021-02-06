var express = require("express");
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const key = 'chiffrementblowfish';
const Blowfish = require("javascript-blowfish");

router.post("/", function(req, res, next) {
    let rsa = new Blowfish.Blowfish(key)
    let db = new sqlite3.Database('./data.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
        db.get('SELECT * FROM user WHERE email = ?', [rsa.base64Encode(rsa.encrypt(req.body.email))], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            return row
                ? res.send(isGoodPassword(row.password, req.body.password, rsa.decrypt(rsa.base64Decode(row.email))))
                : db.run(`INSERT INTO user (email, password) VALUES(?,?)`, [rsa.base64Encode(rsa.encrypt(req.body.email)), req.body.password], function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                    // get the last insert id
                    console.log(`A row has been inserted with rowid ${this.lastID}`);
                    res.send({code:2, msg:'Account created'})
                });
        });
    });

    db.close();
});

function isGoodPassword(dbPassword, reqPassword, dbEmail) {
    if (dbPassword.localeCompare(reqPassword) === 0) {
        return {code:1, msg:'Connected', email:dbEmail}
    }
    else {
        return {code:3, msg:'Wrong password'}
    }
}

module.exports = router;