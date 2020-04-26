module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("chats", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user1_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user2_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      chat_id: {
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
    return queryInterface.dropTable("chats");
  },
};
