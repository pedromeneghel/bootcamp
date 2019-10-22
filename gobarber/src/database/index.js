import Sequelize from 'sequelize';

// Importando models
import File from '../app/models/File';
import User from '../app/models/User';

// Importando arquivos config
import databaseConfig from '../config/database';

// Criando um array como os models
const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // Percorrendo o array de models e adicionando a conexão
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
