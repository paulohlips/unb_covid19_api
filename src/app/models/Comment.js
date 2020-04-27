import Sequelize, { Model } from "sequelize";

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comment: Sequelize.STRING,
        volunteer_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  /*   static associate(models) {
    this.hasMany(models.Volunteer, {
      foreignKey: "volunteer_id",
      as: "volunteer",
    });
  } */
}

export default Comment;
