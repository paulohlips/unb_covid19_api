import Profile from '../models/Profile'
import * as Yup from "yup";

class ProfileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const profileExists = await User.findOne({ where: { name: req.body.name } });

    if (profileExists) {
      return res.status(400).json({ error: "Profile already exists." });
    }

    const {
      id,
      name
    } = await Profile.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async index(req, res) {
    const ocurrences = await Profile.findAll();

    return res.json(ocurrences);
  }
}

export default new ProfileController();
