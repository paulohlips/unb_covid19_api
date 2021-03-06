import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";
import Volunteer from "../models/Volunteer";
import File from "../models/File";

import auth from "../../config/auth";
import Profile from "../models/Profile";
class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Validation fails" });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Volunteer,
          as: "volunteer",
          attributes: ["id", "activities", "specialty"],
        },
        {
          model: File,
          as: "avatar",
          attributes: ["id", "path"],
        },
      ],
    });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const {
      id,
      name,
      whatsapp,
      volunteer_id,
      avatar_id,
      profile,
      avatar,
      type,
      link_unb,
    } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        whatsapp,
        volunteer_id,
        profile,
        avatar_id,
        avatar,
        type,
        link_unb,
      },
      token: jwt.sign({ id, profile }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
