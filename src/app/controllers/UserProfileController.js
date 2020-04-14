import UserProfile from '../models/UserProfile'
import * as Yup from "yup";

class UserProfileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      profile_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const userProfileExists = await UserProfile.findOne({ where: { user_id: req.body.user_id, profile_id: req.body.profile_id }});

    if (userProfileExists) {
      return res.status(400).json({ error: "User already belongs to this profile." });
    }

    const {
      user_id,
      profile_id
    } = await UserProfile.create(req.body);

    return res.json({
      user_id,
      profile_id
    });
  }

  async index(req, res) {
    const ocurrences = await UserProfile.findAll();

    return res.json(ocurrences);
  }
}

export default new UserProfileController();
