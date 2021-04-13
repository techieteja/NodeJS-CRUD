const mongoose = require('mongoose');
const mongooseUrl = "mongodb://localhost:27017/crud";

// To remove depreciation errors
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set('useCreateIndex', true);

// Create database object
class Database{
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect(mongooseUrl).then(
            () => { console.log('Sucessfully connected to database')},
            err => {console.log("Failed to connect to databse - " + err)}
        );
    }
}

// Export database
module.exports = new Database();