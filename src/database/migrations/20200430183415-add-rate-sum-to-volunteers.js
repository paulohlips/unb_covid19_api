module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn("volunteers", "sum", {
      type: Sequelize.FLOAT,
      defaultValue: "0",
    });
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn("volunteers", "sum");
  },
};
