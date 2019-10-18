import Sequelize from 'sequelize';

// Importando models
import User from '../app/models/User';

// Importando arquivos config
import databaseConfig from '../config/database';

// Criando um array como os models
const models = [User]

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // Percorrendo o array de models e adicionando a conexão
    models.map( model => model.init(this.connection));
  }
}

export default new Database();