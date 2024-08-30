import { imageUpload } from "../utils/cloudinary.js";
import path from 'path';
import fs from 'fs';
import serviceModel from "../models/serviceModel.js";

export const addServiceDetails = async (req, res) => {
  try {
    const { description, name } = req.body;
    const imageFile = req.file;

    if (!imageFile || !description || !name) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const imagePath = path.join('uploads', imageFile.filename); 

    const service = new serviceModel({
      image: imagePath,
      description,
      name,
    });

    const serviceData = await service.save();

    if (!serviceData) {
      return res.status(500).json({ error: "Failed to save service data" });
    }

    return res.status(200).json({ success: true, data: serviceData });
  } catch (err) {
    console.error("Error adding service details:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getServiceDetails = async (req, res) => {
  try {
    const serviceData = await serviceModel.find();

    if (!serviceData || serviceData.length === 0) {
      return res.status(404).json({ error: "No service data found" });
    }

    const dataWithUrls = serviceData.map(service => ({
      ...service._doc,
      image: `${req.protocol}://${req.get('host')}/${service.image}`,
    }));
    console.log('get',dataWithUrls)
    return res.status(200).json({
      success: true,
      data: dataWithUrls,
    });
  } catch (err) {
    console.error("Error fetching service details:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


export const getSingleServiceDetails = async (req,res) =>{
  try{
    const serviceData = await serviceModel.find({_id:req.params.serviceId})
    if (!serviceData) {
      return res.status(404).json({ error: "No service data found" });
    }
    return res.status(200).json({
      success: true,
      data: serviceData,
    });
  }catch(err){
    console.log(err)
  }
}


export const editServiceDetails = async (req, res) => {
  try {
    const { description, name, serviceId } = req.body;
    const imageFile = req.file; // Multer stores the uploaded file in req.file

    // Ensure required fields are provided
    if (!description || !name || !serviceId) {
      return res.status(400).json({ error: "Description, name, and serviceId are required" });
    }

    // Find the service by ID
    const service = await serviceModel.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    // Prepare the update object
    const updateData = {
      description,
      name,
    };

    // If a new image is provided, handle it
    if (imageFile) {
      // Define where the uploaded image will be stored
      const imagePath = path.join('uploads', imageFile.filename);

      // Update the image path
      updateData.image = imagePath;
    }

    // Update the service with new data
    const updatedService = await serviceModel.findByIdAndUpdate(serviceId, updateData, { new: true });
    if (!updatedService) {
      return res.status(500).json({ error: "Failed to update service" });
    }
    return res.status(200).json({ success: true, message: "Service updated successfully", service: updatedService });
  } catch (err) {
    console.error("Error updating service details:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const deleteServiceDetails = async (req,res) =>{
  try{
    const { serviceId } = req.params;
    if (!serviceId) {
      return res.status(400).json({ message: 'Service ID is required' });
    }

    const result = await serviceModel.deleteOne({ _id: serviceId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Service not found' });
    }

    return res.status(200).json({success:true, message: 'Service deleted successfully' });
    
  }catch(err){
    console.log(err)
  }
}