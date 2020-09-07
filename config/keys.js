const config = require('../../config');

module.exports = {
  mongoURI: `mongodb+srv://${config.user}:${config.password}@${config.dbname}.1wbwu.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
}