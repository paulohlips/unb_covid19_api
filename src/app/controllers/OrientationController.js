import Orientation from "../models/Orientation";
import User from "../models/User";

class OrientationController {
  async store(req, res) {
    req.body["requester_id"] = req.userId;
    try {
      const orientation = await Orientation.create(req.body);

      return res.json(orientation);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async show(req, res) {
    const { dep } = req.query;
    try {
      if (dep) {
        console.log(dep);
        const orientation = await Orientation.findAll({
          where: {
            departament: dep,
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "name", "email", "whatsapp"],
            },
          ],
        });

        return res.status(200).json(orientation);
      }

      const orientation = await Orientation.findAll();
      return res.status(200).json(orientation);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Problema no servidor. Erro: ${err}` });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const orientation = await Orientation.findOne({ where: { id } });

    if (orientation) {
      const result = Orientation.update(req.body, { where: { id } });

      return res.json({ message: "Updated!" });
    }

    return res.json({ message: "Orientation project not found." });
  }
}

export default new OrientationController();
