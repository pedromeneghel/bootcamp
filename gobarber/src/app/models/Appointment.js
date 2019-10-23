import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    // Super é classe exstendida (model) e init é um método da classe Model
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'provider' });
  }
}

export default Appointment;
