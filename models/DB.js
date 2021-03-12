const Sequelize =  require('sequelize')
const sequelize = new Sequelize('teste','postgres','root',{
    host: "localhost", dialect: 'postgres'
})

sequelize.authenticate().then(function(){
    console.log("conctado com sucesso!!")
}).catch(function(erro){
    console.log("falha ao conectar: "+ erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize
}