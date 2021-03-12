const { Model } = require('sequelize/types')
const db = require('./db')

const Post = db.sequelize.define('postagens',{
    tiulo: {
        type:db.Sequelize.STRING
    }
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

/* usar comando somente uma vez
Post.sync({force: true})
*/

module.exports = Post