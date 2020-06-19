module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orientations", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      requester_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
        allowNull: true,
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
        allowNull: true,
      },
      departament: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "open",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      details: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("orientations");
  },
};
