import UserProfile from '../models/UserProfile'
import * as Yup from "yup";

class UserProfileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      userId: Yup.number().required(),
      profileId: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const userProfileExists = await User.findOne({ where: { userId: req.body.userId, profileId: req.body.profileId }});

    if (userProfileExists) {
      return res.status(400).json({ error: "User already ." });
    }

    const {
      userId,
      profileId
    } = await Profile.create(req.body);

    return res.json({
      userId,
      profileId
    });
  }

  async index(req, res) {
    const ocurrences = await Profile.findAll();

    return res.json(ocurrences);
  }
}

export default new UserProfileController();
