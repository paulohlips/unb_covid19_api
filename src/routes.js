import { Router } from "express";
import cors from "cors";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VolunteersController from "./app/controllers/VolunteersController";
import HelpRequestController from "./app/controllers/HelpRequestController";

import authMiddleware from "./app/middlewares/auth";
import ProfileController from "./app/controllers/ProfileController";
import UserProfileController from "./app/controllers/UserProfileController";

const routes = new Router();

routes.use(cors());

routes.get("/", (req, res) => {
  return res.send(
    "Bem-vindo, \n\nPara mais informações consulte a documentação em\n\n https://github.com/paulohlips/unb_covid19_api "
  );
});


routes.post("/sessions", SessionController.store);

routes.post("/users", UserController.store);

routes.post("/profiles",authMiddleware, ProfileController.store);

routes.post("/users_profiles",authMiddleware, UserProfileController.store);

routes.get("/volunteers",authMiddleware, VolunteersController.index);
routes.get("/users"
//,authMiddleware
, UserController.index);
routes.get("/profiles",authMiddleware, ProfileController.index);

routes.post("/volunteers",authMiddleware, VolunteersController.store);
routes.put("/volunteers",authMiddleware, VolunteersController.update);

routes.get("/help", HelpRequestController.index);
routes.post("/help", HelpRequestController.store);

export default routes;
