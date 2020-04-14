module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("profiles", {
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
        accessLevel: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      });
    },
  
    down: queryInterface => {
      return queryInterface.dropTable("profiles");
    }
  };
  