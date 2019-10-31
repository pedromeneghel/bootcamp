import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// Importando models
import File from '../app/models/File';
import User from '../app/models/User';
import Appointment from '../app/models/Appointment';

// Importando arquivos config
import databaseConfig from '../config/database';

// Criando um array como os models
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // Percorrendo o array de models e adicionando a conexão
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
