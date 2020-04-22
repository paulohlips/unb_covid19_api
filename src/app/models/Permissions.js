const write = ['post', 'put'];
const read = ['get'];
const readWrite = write.concat(read);

const Permissions = {
    users: {
        profissional: write,
        voluntario: write,
        paciente: write,
    },
    sessions: {
        profissional: write,
        voluntario: write,
        paciente: write
    },
    volunteers: {
        profissional: readWrite,
        voluntario: readWrite,
        paciente: read
    },
    help: {
        profissional: read,
        voluntario: read,
        paciente: readWrite
    },
    voluntary: {
        profissional: readWrite,
        voluntario: readWrite,
        paciente: read
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