import Sequelize, { Model } from "sequelize";

class Chat extends Model {
  static init(sequelize) {
    super.init(
      {
        user1_id: Sequelize.NUMBER,
        user2_id: Sequelize.NUMBER,
        chat_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user1_id", as: "user1" });
    this.belongsTo(models.User, { foreignKey: "user2_id", as: "user2" });
  }
}

export default Chat;
