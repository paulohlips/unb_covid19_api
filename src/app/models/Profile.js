const Profile = Object.freeze({
    DEFAULT: 0,
    ADMIN: 1,
    PROFISSIONAL: 2,
    VOLUNTARIO: 3,
    PACIENTE: 4,
    indexOf: (value) => Object.keys(Profile).find(key => Profile[key] === value),
    valueOf: (key) => Profile[key]
});

export default Profile;