//Arquivo responsável por iniciar conexão com o banco de dados e carregar as models
import Sequelize from "sequelize";

import User from "../app/models/User";
import Volunteer from "../app/models/Volunteer";
import HelpRequest from "../app/models/HelpRequest";
import File from "../app/models/File";
import Comment from "../app/models/Comment";
import Chat from "../app/models/Chat";
import SosButton from "../app/models/SosButton";
import Orientation from "../app/models/Orientation";

import databaseConfig from "../config/database";

const models = [
  User,
  Volunteer,
  HelpRequest,
  File,
  Comment,
  Chat,
  Orientation,
  SosButton,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
