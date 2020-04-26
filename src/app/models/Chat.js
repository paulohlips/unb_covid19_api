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
}

export default Chat;
