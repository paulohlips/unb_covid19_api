import Sequelize from "sequelize";

let json_model = [];
let json_insomnia = [];

const json = {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tamanho: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado_civil: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_admissao: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  data_disponibilizacao: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  data_desligamento: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rua: {
    type: Sequelize.STRING,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  banco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  agencia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  conta: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  situacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  motivo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

let count = 0;

Object.entries(json).forEach(async (item) => {
  let obj = `${Object.keys(json)[count]}: Sequelize.${json.name.type.key}`;
  json_model.push(obj);
  let obj2 = `"${Object.keys(json)[count]}": ""`;
  json_insomnia.push(obj2);
  count++;
});

console.log(json_model);
console.log(json_insomnia);
