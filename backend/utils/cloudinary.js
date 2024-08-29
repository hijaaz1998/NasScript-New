import { randomUUID } from "crypto";
import { v2 as cloudinary } from 'cloudinary';

export const imageUpload = async (file) => {
  try {
    if (!file || !file.mimetype.startsWith("image/")) {
      throw new Error("Invalid file type. Only images are allowed.");
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: ` ${randomUUID()}`,
      resource_type: "auto",
      folder: "CODEWIZARD",
    });

    const myResultObj = {
      public_id: result.public_id,
      url: result.url,
    };

    return myResultObj;
  } catch (err) {
    console.log(err);
  }
};
