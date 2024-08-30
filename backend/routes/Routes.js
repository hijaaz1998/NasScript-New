import express from "express";
import {
  addServiceDetails,
  getServiceDetails,
  getSingleServiceDetails,
  editServiceDetails,
  deleteServiceDetails
} from "../controller/adminController.js";
import upload from "../config/multer.js";
// import { isAuthenticated, isAdmin } from "../middleware/auth.js"; // Adjust the path as needed

const Routes = express.Router();

// Public route
Routes.get("/services", getServiceDetails);

// Admin-only routes
// Routes.use(isAuthenticated, isAdmin); // Apply middleware to all subsequent routes

Routes.post("/addservices", upload.single('image'), addServiceDetails);
// Routes.post("/login", upload.single('image'), adminLoginogin); // Assuming login should not have admin restriction
Routes.get("/editservice/:serviceId", getSingleServiceDetails);
Routes.put("/editservices", upload.single('image'), editServiceDetails);
Routes.delete("/deleteservice/:serviceId", deleteServiceDetails);

export default Routes;
