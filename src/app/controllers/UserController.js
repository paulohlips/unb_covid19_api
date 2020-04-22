import User from "../models/User";
import * as Yup from "yup";
import Profile from "../models/Profile";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
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
    const users = await User.findAll();

    return res.json(users);
  }

  async setUsersProfile(req, res) {
    const schema = Yup.array().of(Yup.object().shape({
      user_id: Yup.number().required(),
      profile_id: Yup.number().required(),
    }));

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    var usersToSetProfile = [];
    const map = new Map();
    for (const item of req.body) {
      const { user_id, profile_id } = item;
      if (map.has(user_id) || !Profile.indexOf(profile_id)) {
        continue;
      }
      map.set(user_id, true);
      usersToSetProfile.push({
        user_id,
        profile_id
      });
    }

    usersToSetProfile.forEach(async (element) => {
      const { profile_id, user_id } = element;
      await User.update({ profile_id }, { where: { id: user_id } });
    });
    return res.json({ success: true });
  }

  listProfiles(_, res) {
    return res.json(Object.keys(Profile)
      .filter(x => !isNaN(Profile.valueOf(x)) && Profile.valueOf(x) > 0)
      .map(p => ({
        name: p.charAt(0).toUpperCase() + p.slice(1).toLowerCase(),
        value: Profile.valueOf(p)
      })));
  }
}

export default new UserController();
