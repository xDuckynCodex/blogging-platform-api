'use strict'
const mongoose = require('mongoose')
const connectString = `mongodb://localhost:27017/blog`

class Database {
    constructor() {
        this.connect()
    }
    connect() {
        mongoose.connect(connectString)
            .then(_ => console.log(`Connect DB success`))
            .catch(e => console.log(e));
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Database()
        }
        return this.instance
    }
}

module.exports = Database.getInstance()