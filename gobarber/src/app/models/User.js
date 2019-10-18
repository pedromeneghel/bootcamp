import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // Super é classe exstendida (model) e init é um método da classe Model
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    });
  }
}

export default User;