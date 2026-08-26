// Importa a biblioteca do Express e ativa especificamente o módulo de rotas (Router).
// O Router funciona como um gerenciador de caminhos (URLs) para o seu servidor.
const route = require('express').Router()

// Importa o arquivo do controlador (controller) de usuários que você criou anteriormente.
// É esse arquivo que contém a lógica do que deve acontecer quando uma rota for acessada.
const userController = require('../controllers/userController')

// Cria uma rota do tipo POST no endereço '/register'.
// Quando alguém enviar dados para essa URL, o Express vai executar a função 'register' que está dentro do 'userController'.
route.post('/register',userController.register)

// Exporta o configurador de rotas criado neste arquivo.
// Isso permite que o seu arquivo principal do servidor (como o index.js ou app.js) consiga ler e usar essas rotas.
module.exports = route
