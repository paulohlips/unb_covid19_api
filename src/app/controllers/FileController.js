import File from "../models/File";
import User from "../models/User";

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const { email } = req.headers;

    const { id, url } = await File.create({
      name,
      path,
    });

    const updateUserTable = User.update(
      { avatar_id: id },
      { where: { email } }
    );

    return res.json({ id, name, path, url });
  }
}

export default new FileController();
