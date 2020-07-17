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
import OrientationController from "./app/controllers/OrientationController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

const upload = multer(multerConfig);

routes.use(cors());

routes.get("/", (req, res) => {
  return res.send(
    "Bem-vindo, \n\nPara mais informações consulte a documentação em\n\n https://github.com/paulohlips/unb_covid19_api "
  );
});

routes.get("/orientations", OrientationController.index);
routes.get("/orientations", OrientationController.show);
routes.post("/orientations", authMiddleware, OrientationController.store);
routes.put("/orientations/:id", authMiddleware, OrientationController.update);

routes.post("/files", upload.single("file"), FileController.store);
routes.post("/sessions", SessionController.store);

routes.post("/users", UserController.store);
routes.get("/users", authMiddleware, UserController.index);
routes.put("/users/profiles", authMiddleware, UserController.setUsersProfile);
routes.get("/users/profiles", authMiddleware, UserController.listProfiles);

routes.post("/voluntary", VolunteersController.show);
routes.get("/volunteers", authMiddleware, VolunteersController.index);
routes.post("/volunteers", authMiddleware, VolunteersController.store);
routes.put("/volunteers", authMiddleware, VolunteersController.update);

routes.put(
  "/quitVolunteer",
  authMiddleware,
  VolunteersController.updateVolunteer
);

routes.post("/files", upload.single("file"), FileController.store);

routes.get("/help", HelpRequestController.index);
routes.post("/help", HelpRequestController.store);

routes.get("/rates", RatesController.show);
routes.put("/rates", RatesController.update);

routes.get("/comments/:volunteer_id", CommentsController.index);
routes.post("/comments", CommentsController.store);

routes.get("/chats", ChatController.index);
routes.post("/chats", ChatController.store);

routes.get("/sos", SosButtonController.index);
routes.post("/sos", SosButtonController.store);

export default routes;
