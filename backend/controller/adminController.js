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

    console.log('dataWithUrls', dataWithUrls);

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

export const editServiceDetails = async(req,res)=>{
  try{
    const { description, name, serviceId } = req.body;

    if (!req.files?.image || !description || !name) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const image = await imageUpload(req.files.image);

    if (!image) {
      return res.status(500).json({ error: "Image upload failed" });
    }

    const updatedService = await serviceModel.findByIdAndUpdate(
      {_id:serviceId},
      {
        description,
        name,
        image: image.url,
      },
      { new: true } 
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    return res.status(200).json({success:true, message: "Service updated successfully", service: updatedService });
  }catch(err){
    console.log(err)
  }
}

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