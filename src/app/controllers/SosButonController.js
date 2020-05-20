import SosButton from "../models/SosButton";
import * as Yup from "yup";

class SosButonController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      user_location: Yup.string().required(),
      whatsapp: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    console.log(req.body);
    const { id, name, whatsapp, user_location } = await SosButton.create(
      req.body
    );

    return res.json({
      id,
      name,
      whatsapp,
      user_location,
    });
  }

  async index(req, res) {
    const ocurrences = await SosButton.findAll();

    return res.json(ocurrences);
  }
}

export default new SosButonController();
