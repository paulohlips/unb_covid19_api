import Volunteer from "../models/Volunteer";
import User from "../models/User";

import * as Yup from "yup";

class VolunteersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      whatsapp: Yup.string().required(),
      cpf: Yup.string().required(),
      professional_id: Yup.string().required(),
      uf: Yup.string().required(),
      specialty: Yup.string().required(),
      administrative_region: Yup.string().required(),
      activities: Yup.string().required(),
      user_location: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const volunteerExists = await Volunteer.findOne({
      where: { email: req.body.email },
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
      is_sick,
    } = await Volunteer.create(req.body);

    const updateUserTable = User.update(
      { volunteer_id: id },
      { where: { email } }
    );

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
      is_sick,
    });
  }

  async index(req, res) {
    const { ra } = req.query;

    if (ra) {
      console.log(ra);
      const volunteers = await Volunteer.findAll({
        where: {
          administrative_region: ra,
        },
      });

      return res.json(volunteers);
    }
    const volunteers = await Volunteer.findAll({});

    return res.json(volunteers);
  }

  async show(req, res) {
    const { email } = req.body;

    const volunteer = await Volunteer.findOne({ where: { email } });

    if (volunteer) {
      return res.json(volunteer);
    }
    return res.status(404).json({ message: "Is not volunteer" });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      is_sick: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, is_sick } = req.body;

    const { id, name } = await Volunteer.findOne({ where: { email } });

    const result = Volunteer.update({ is_sick: is_sick }, { where: { email } });

    return res.json({ id, name, is_sick });
  }
}

export default new VolunteersController();
