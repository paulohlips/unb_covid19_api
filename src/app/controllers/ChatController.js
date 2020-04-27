import Chat from "../models/Chat";
import Op from "sequelize";

import * as Yup from "yup";

class ChatController {
  async index(req, res) {
    const schema = Yup.object().shape({
      user: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { user } = req.query;

    const chats = await Chat.findAll({
      where: { user1_id: user },
    });

    return res.json(chats);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user1_id: Yup.number().required(),
      user2_id: Yup.number().required(),
      chat_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const chat = await Chat.create(req.body);

    return res.json(chat);
  }
}

export default new ChatController();