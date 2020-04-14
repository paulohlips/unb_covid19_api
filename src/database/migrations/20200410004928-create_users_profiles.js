module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users_profiles", {
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
            },
            profile_id: {
                type: Sequelize.INTEGER,
                references: { model: 'profiles', key: 'id' }
            },
        }).then(x =>
            queryInterface.addConstraint('users_profiles', ['user_id', 'profile_id'], {
                type: 'primary key',
                name: 'users_profiles_pkey'
            })
        );
    },

    down: queryInterface => {
        return queryInterface.dropTable("users_profiles");
    }
};
