import Sequelize, { Model } from "sequelize";

class Orientation extends Model {
  static init(sequelize) {
    super.init(
      {
        requester_id: Sequelize.INTEGER,
        professor_id: Sequelize.INTEGER,
        departament: Sequelize.STRING,
        status: Sequelize.STRING,
        title: Sequelize.STRING,
        details: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "requester_id", as: "user" });
  }
}

export default Orientation;
