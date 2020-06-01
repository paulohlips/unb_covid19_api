import Sequelize, { Model } from "sequelize";

class SosButton extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        user_location: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default SosButton;
