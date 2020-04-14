import { Model } from "sequelize";

class UserProfile extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        timestamps: false,
        tableName: 'users_profiles'
      }
    );
    return this;
  };
}

export default UserProfile;