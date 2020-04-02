import Volunteer from "../models/Volunteer";
import * as Yup from "yup";

class VolunteersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      whatsapp: Yup.string().required(),
      cpf: Yup.string().required(),
      professional_id: Yup.string().required(),
      uf: Yup.string().required(),
      specialty: Yup.string().required(),
      administrative_region: Yup.string().required(),
      activities: Yup.string().required(),
      user_location: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const volunteerExists = await Volunteer.findOne({
      where: { email: req.body.email }
    });

    if (volunteerExists) {
      return res.status(400).json({ error: "volunteerExists already exists." });
    }

    const {
      id,
      name,
      email,
      whatsapp,
      rg_id,
      uf,
      specialty,
      administrative_regiony,
      activities,
      user_location,
      is_sick
    } = await Volunteer.create(req.body);

    return res.json({
      id,
      name,
      email,
      whatsapp,
      rg_id,
      uf,
      specialty,
      administrative_regiony,
      activities,
      user_location,
      is_sick
    });
  }

  async index(req, res) {
    const { ra } = req.query;
    const volunteers = await Volunteer.findAll({
      where: {
        administrative_region: ra
      }
    });

    return res.json(volunteers);
  }
}

export default new VolunteersController();
