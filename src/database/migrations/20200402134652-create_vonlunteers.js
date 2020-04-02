module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("volunteers", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      professional_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: true
      },
      administrative_region: {
        type: Sequelize.STRING,
        allowNull: false
      },
      activities: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_sick: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("volunteers");
  }
};
