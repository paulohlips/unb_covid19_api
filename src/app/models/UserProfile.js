import Sequelize, { Model } from "sequelize";

class UserProfile extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        profileId: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default UserProfile;