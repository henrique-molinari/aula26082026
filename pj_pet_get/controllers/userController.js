// Requerer um model do usuário

// Importa o arquivo de configuração do usuário (geralmente ligado ao banco de dados). 
const User = require('../models/users')

// Cria e exporta uma classe chamada UserController. 
// O "module.exports" permite que essa classe seja usada em outros arquivos do seu projeto (como no arquivo de rotas).
module.exports = class UserController { 
    
    // Cria um método (função) chamado "register".
    // "static" permite chamar a função sem criar um "new UserController".
    // "async" indica que a função lida com processos assíncronos (como consultas ao banco de dados).
    // "req" (requisição) traz os dados que vêm do cliente e "res" (resposta) envia os dados de volta.
    static async register(req, res) { 
        
        const { name, email, password, image, phone } = req.body

        // Validar se esta recebenddo o nome
        if (!name) {
            res.status(422).json({ message: 'O campo name é obrigatório!' })
            return
        } 
    } // Fecha o método register
} // Fecha a classe UserController
