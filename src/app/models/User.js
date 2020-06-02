import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
import Profile from "./Profile";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        address: Sequelize.STRING,
        birth_date: Sequelize.STRING,
        link_unb: Sequelize.STRING,
        risk_group: Sequelize.STRING,
        user_location: Sequelize.STRING,
        matricula_unb: Sequelize.STRING,
        profile_id: Sequelize.INTEGER,
        profile: {
          type: Sequelize.VIRTUAL,
          get() { return Profile.indexOf(this.profile_id).toLowerCase() }
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "avatar_id", as: "avatar" });

    this.belongsTo(models.Volunteer, {
      foreignKey: "volunteer_id",
      as: "volunteer",
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
