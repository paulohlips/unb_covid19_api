const Profile = Object.freeze({
    DEFAULT: 0,
    ADMIN: 1,
    PROFISSIONAL: 2,
    VOLUNTARIO: 3,
    PACIENTE: 4,
    VIGILANTE: 5,
    indexOf: (value) => Object.keys(Profile).find(key => Profile[key] === value),
    valueOf: (key) => Profile[key],
    match: (key) => !!key && !!Profile[key.toUpperCase()]
});

export default Profile;