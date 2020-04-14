import jwt from "jsonwebtoken";
import * as Yup from "yup";

import User from "../models/User";
import auth from "../../config/auth";
import UserProfile from "../models/UserProfile"
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
          model: Profile,
          as: 'profiles',
          attributes: ['name'],
          through: {
            model: UserProfile,
            attributes: [],
          },
        },
      ],
    });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const { id, name, whatsapp, profiles } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        whatsapp
      },
      token: jwt.sign({ id, profiles }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
