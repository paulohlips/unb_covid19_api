module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "volunteer_id", {
      type: Sequelize.INTEGER,
      references: { model: "volunteers", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn("users", "volunteer_id");
  },
};
