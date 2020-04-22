import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/auth";
import Permissions from "../models/Permissions";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    const route = req.route.path.substr(1);
    const method = Object.keys(req.route.methods).find(_ => true);
    const profile = decoded.profile;

    if(!Permissions.match(profile, route, method)){
      return res.status(403).json({ error: "Forbidden" });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token" });
  }

  next();
};
