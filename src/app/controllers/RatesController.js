import Volunteer from "../models/Volunteer";

import * as Yup from "yup";

let num_avaliations,
  newSum,
  mean = 0;

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

    const { sum, count_avaliation } = await Volunteer.findOne({
      where: { email },
    });

    num_avaliations = count_avaliation + 1;
    newSum = sum + volunteer_rate;
    mean = newSum / num_avaliations;

    await Volunteer.update(
      { rate: mean, count_avaliation: num_avaliations, sum: newSum },
      { where: { email } }
    );

    return res.json({ mean, num_avaliations });
  }

  async show(req, res) {
    const { email } = req.query;

    const volunteer = await Volunteer.findOne({ where: { email } });

    if (volunteer) {
      return res.json(volunteer);
    }
    return res.status(404).json({ message: "Is not volunteer" });
  }
}

export default new RatesController();
