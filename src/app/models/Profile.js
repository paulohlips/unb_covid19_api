import Sequelize, { Model } from "sequelize";

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        level: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(model) {
    this.belongsToMany(model.User, {
      through: model.UserProfile,
      as: 'users'
    });
  }
}

export default Profile;
