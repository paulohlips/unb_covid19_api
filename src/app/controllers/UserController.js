import User from "../models/User";
import Volunteer from "../models/Volunteer";
import File from "../models/File";

import * as Yup from "yup";

class UserController {
  async store(req, res) {
    /*     const schema = Yup.object().shape({
      name: Yup.string().required(),
      whatsapp: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      address: Yup.string().required(),
      birth_date: Yup.string().required(),
      link_unb: Yup.string().required(),
      risk_group: Yup.string(),

      matricula_unb: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }
 */
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: "User already exists." });
    }

    const {
      id,
      name,
      email,
      whatsapp,
      address,
      birth_date,
      link_unb,
      risk_group,
      user_location,
      matricula_unb,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      whatsapp,
      address,
      birth_date,
      link_unb,
      risk_group,
      user_location,
      matricula_unb,
    });
  }

  async index(req, res) {
    const users = await User.findAll({
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

    return res.json(users);
  }
}

export default new UserController();
