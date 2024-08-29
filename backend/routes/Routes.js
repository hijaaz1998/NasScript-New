import express from "express";
import {
  addServiceDetails,
  getServiceDetails,
  getSingleServiceDetails,
  editServiceDetails,
  deleteServiceDetails
} from "../controller/adminController.js";
const Routes = express.Router();

Routes.post("/addservices", addServiceDetails);
Routes.get("/services", getServiceDetails);
Routes.get("/editservice/:serviceId",getSingleServiceDetails)
Routes.put("/editservices",editServiceDetails)
Routes.delete("/deleteservice/:serviceId",deleteServiceDetails)
export default Routes;
