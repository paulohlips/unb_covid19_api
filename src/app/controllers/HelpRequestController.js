import HelpRequest from "../models/HelpRequest";
import * as Yup from "yup";

class HelpRequestController {
  async store(req, res) {
    /*    const schema = Yup.object().shape({
      name: Yup.string().required(),
      sintoms: Yup.string().required(),
      whatsapp: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    } */

    const {
      id,
      name,
      whatsapp,
      user_location,
      sintoms,
    } = await HelpRequest.create(req.body);

    return res.json({
      id,
      name,
      whatsapp,
      user_location,
      sintoms,
    });
  }

  async index(req, res) {
    const ocurrences = await HelpRequest.findAll();

    return res.json(ocurrences);
  }
}

export default new HelpRequestController();
