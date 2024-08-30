import express from "express";
import {
  addServiceDetails,
  getServiceDetails,
  getSingleServiceDetails,
  editServiceDetails,
  deleteServiceDetails,
  adminLogin
} from "../controller/adminController.js";
import upload from "../config/multer.js";
import { isAuthenticated } from "../middleware/auth.js";

const Routes = express.Router();

Routes.get("/services", getServiceDetails);
Routes.post("/login", adminLogin); 

Routes.use(isAuthenticated); 

Routes.post("/addservices", upload.single('image'), addServiceDetails);
Routes.get("/editservice/:serviceId", getSingleServiceDetails);
Routes.put("/editservices", upload.single('image'), editServiceDetails);
Routes.delete("/deleteservice/:serviceId", deleteServiceDetails);

export default Routes;
