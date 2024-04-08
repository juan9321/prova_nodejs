const banco = require("./banco.js")

const prova = banco.sequelize.define('prova',{
    nome: {
        type: banco.Sequelize.STRING
    },
        endereco: {
        type: banco.Sequelize.STRING
    },
        bairro: {
        type: banco. Sequelize.STRING
    },
        cep: {
        type: banco.Sequelize.STRING
    },
        cidade: {
        type: banco. Sequelize.STRING
    },
    estado: {
        type: banco. Sequelize.STRING
    }        
})

 //prova.sync({force: true})

module.exports = prova