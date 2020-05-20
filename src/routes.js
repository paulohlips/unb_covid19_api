import { Router } from "express";

import multer from "multer";
import cors from "cors";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VolunteersController from "./app/controllers/VolunteersController";
import HelpRequestController from "./app/controllers/HelpRequestController";
import FileController from "./app/controllers/FileController";
import RatesController from "./app/controllers/RatesController";
import CommentsController from "./app/controllers/CommentsController";
import ChatController from "./app/controllers/ChatController";
import SosButtonController from "./app/controllers/SosButonController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

const upload = multer(multerConfig);

routes.use(cors());

routes.get("/", (req, res) => {
  return res.send(
    "Bem-vindo, \n\nPara mais informações consulte a documentação em\n\n https://github.com/paulohlips/unb_covid19_api "
  );
});

routes.post("/users", UserController.store);
routes.post("/files", upload.single("file"), FileController.store);

routes.post("/sessions", SessionController.store);

routes.post("/sos", SosButtonController.store);

routes.use(authMiddleware);

routes.get("/volunteers", VolunteersController.index);
routes.post("/voluntary", VolunteersController.show);
routes.get("/users", UserController.index);

routes.post("/volunteers", VolunteersController.store);
routes.put("/volunteers", VolunteersController.update);
routes.put("/quitVolunteer", VolunteersController.updateVolunteer);

routes.get("/rates", RatesController.show);
routes.put("/rates", RatesController.update);

routes.get("/comments", CommentsController.index);
routes.post("/comments", CommentsController.store);

routes.get("/chats", ChatController.index);
routes.post("/chats", ChatController.store);

routes.get("/help", HelpRequestController.index);
routes.post("/help", HelpRequestController.store);

routes.get("/sos", SosButtonController.index);

export default routes;
