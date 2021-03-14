if (process.env.NODE_ENV === 'production') {
    module.exports = require('./production');
} else {
    module.exports = {
        port: 3030,
        mongodbURI: 'mongodb://localhost/travel-app',
        jwt:'dev-jwt'
    }
}
