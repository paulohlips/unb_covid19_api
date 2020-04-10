module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users_profiles", {
            userId: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' }
            },
            profileId: {
                type: Sequelize.INTEGER,
                references: { model: 'profiles', key: 'id' }
            },
        }).then(x =>
            queryInterface.addConstraint('users_profiles', ['userId', 'profileId'], {
                type: 'primary key',
                name: 'users_profiles_pkey'
            })
        );
    },

    down: queryInterface => {
        return queryInterface.dropTable("users_profiles");
    }
};
