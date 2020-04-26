import Sequelize, { Model } from "sequelize";

class Volunteer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        cpf: Sequelize.STRING,
        professional_id: Sequelize.STRING,
        uf: Sequelize.STRING,
        specialty: Sequelize.STRING,
        administrative_region: Sequelize.STRING,
        activities: Sequelize.STRING,
        user_location: Sequelize.STRING,
        is_sick: Sequelize.BOOLEAN,
        quit: Sequelize.BOOLEAN,
        rate: Sequelize.FLOAT,
        count_avaliation: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Volunteer;
