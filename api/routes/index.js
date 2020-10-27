const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(pessoas);
  app.get('/', (req, res) => res
    .status(200)
    .send({message: 'Hello world da API com a nova rota'})
 
)
};