const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(`mongodb+srv://c-site:${process.env.PASS}@c-site.rriyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('The bot has connected to MongoDB.');
        });

        mongoose.connection.on('disconnect', () => {
            console.log('The bot has disconnected from MongoDB.');
        });

        mongoose.connection.on('error', (err) => {
            console.log('There was an error with the connection to MongoDB. ' + err);
        });
    }
}