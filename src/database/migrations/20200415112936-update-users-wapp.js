module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeConstraint("users", "users_whatsapp_key");
  },
};
