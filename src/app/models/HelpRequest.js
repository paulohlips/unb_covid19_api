import Sequelize, { Model } from "sequelize";

class HelpRequest extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        sintoms: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        user_location: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default HelpRequest;
