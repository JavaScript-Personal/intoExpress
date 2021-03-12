const Sequelize =  require('sequelize')
const sequelize = new Sequelize('teste','root','root',{
    host: "localhost:5432", dialect: 'pg-hstore'
})

sequelize.authenticate().then(function(){
    console.log("conctado com sucesso!!")
}).catch(function(erro){
    console.log("falha ao conectar: "+ erro)
})