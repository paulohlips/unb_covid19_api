import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VolunteersController from "./app/controllers/VolunteersController";
import HelpRequestController from "./app/controllers/HelpRequestController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.get("/help", HelpRequestController.index);
routes.get("/volunteers", VolunteersController.index);
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/volunteers", VolunteersController.store);
routes.put("/volunteers", VolunteersController.update);

routes.post("/help", HelpRequestController.store);

export default routes;
