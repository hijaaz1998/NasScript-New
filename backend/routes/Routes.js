import express from "express";
import {
  addServiceDetails,
  getServiceDetails,
  getSingleServiceDetails,
  editServiceDetails,
  deleteServiceDetails
} from "../controller/adminController.js";
const Routes = express.Router();
import upload from "../config/multer.js";

Routes.post("/addservices", upload.single('image'), addServiceDetails);
Routes.get("/services", getServiceDetails);
Routes.get("/editservice/:serviceId",getSingleServiceDetails)
Routes.put("/editservices",editServiceDetails)
Routes.delete("/deleteservice/:serviceId",deleteServiceDetails)
export default Routes;
