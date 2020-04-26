import Volunteer from "../models/Volunteer";

import * as Yup from "yup";

class RatesController {
  async store(req, res) {}

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      volunteer_rate: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, volunteer_rate } = req.body;

    const { count_avaliation, rate } = await Volunteer.findOne({
      where: { email },
    });

    let num_avaliations = count_avaliation + 1;
    let sum = rate + volunteer_rate;
    let mean = sum / num_avaliations;

    await Volunteer.update(
      { rate: mean, count_avaliation: num_avaliations },
      { where: { email } }
    );

    return res.json({ mean });
  }

  async show(req, res) {
    const { email } = req.body;

    const volunteer = await Volunteer.findOne({ where: { email } });

    if (volunteer) {
      return res.json(volunteer);
    }
    return res.status(404).json({ message: "Is not volunteer" });
  }
}

export default new RatesController();
