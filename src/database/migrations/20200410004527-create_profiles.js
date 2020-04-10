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
        }
      });
    },
  
    down: queryInterface => {
      return queryInterface.dropTable("profiles");
    }
  };
  