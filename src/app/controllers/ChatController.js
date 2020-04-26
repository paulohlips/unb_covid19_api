import Chat from "../models/Chat";

import * as Yup from "yup";

class CommentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      user1_id: Yup.number().required(),
      user2_id: Yup.number().required(),
      chat_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { comments } = await Chat.create(req.body);

    return res.json(comments);
  }
}

export default new CommentsController();
