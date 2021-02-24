module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos e está fazendo um GET!'))
}