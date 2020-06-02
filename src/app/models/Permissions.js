const write = ['post', 'put'];
const read = ['get'];
const readWrite = write.concat(read);

const Permissions = {
    users: {
        profissional: write,
        voluntario: write,
        paciente: write,
        vigilante: read
    },
    sessions: {
        profissional: write,
        voluntario: write,
        paciente: write,
        vigilante: read
    },
    volunteers: {
        profissional: readWrite,
        voluntario: readWrite,
        paciente: read,
        vigilante: read
    },
    help: {
        profissional: read,
        voluntario: read,
        paciente: readWrite,
        vigilante: readWrite
    },
    voluntary: {
        profissional: readWrite,
        voluntario: readWrite,
        paciente: read,
        vigilante: read
    },
    'users/profiles': {
        profissional: [],
        voluntario: [],
        paciente: []
    },
    match: (profile, route, method) => {
        var routes = Object.keys(Permissions).filter(x => x != 'match');
        profile = profile.toLowerCase();
        if(!routes.includes(route) || profile == 'admin'){
            return true;
        }
        const methods = Permissions[route][profile];
        return !!methods && methods.includes(method);
    }
}


export default Permissions;