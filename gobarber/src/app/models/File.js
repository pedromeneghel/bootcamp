import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // Super é classe exstendida (model) e init é um método da classe Model
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
