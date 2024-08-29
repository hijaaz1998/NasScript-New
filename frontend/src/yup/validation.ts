import * as Yup from "yup";

export const AddServicesSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your service name"),
  description: Yup.string()
    .min(2, "Too Short!")
    .required("Please enter your service description"),
  image: Yup.mixed()
    .required("Please upload an image")
});
