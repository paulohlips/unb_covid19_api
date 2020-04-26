import Comment from "../models/Comment";

import * as Yup from "yup";

class CommentsController {
  async index(req, res) {
    const schema = Yup.object().shape({
      volunteer_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { volunteer_id } = req.body;

    const comments = await Comment.findAll({
      where: { volunteer_id },
    });

    return res.json(comments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      volunteer_id: Yup.number().required(),
      comment: Yup.mixed().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { comments } = await Comment.create(req.body);

    return res.json(comments);
  }
}

export default new CommentsController();
