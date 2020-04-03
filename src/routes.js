import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VolunteersController from "./app/controllers/VolunteersController";
import HelpRequestController from "./app/controllers/HelpRequestController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.render(
    "Bem-vindo, \n\nhttps://github.com/paulohlips/unb_covid19_api Para mais informações consulte a documentação em \n\n https://github.com/paulohlips/unb_covid19_api "
  );
});

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/volunteers", VolunteersController.index);
routes.get("/users", UserController.index);

routes.post("/volunteers", VolunteersController.store);
routes.put("/volunteers", VolunteersController.update);

routes.get("/help", HelpRequestController.index);
routes.post("/help", HelpRequestController.store);

export default routes;
