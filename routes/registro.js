module.exports = (app)=>{
    //abrir o arquivo Login.js
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
}