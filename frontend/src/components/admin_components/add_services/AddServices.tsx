import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddServicesSchema } from "@/yup/validation";
import { useFormik } from "formik";
import { addServiceApi } from "@/api/Route";
import { valuesProps } from "./type";

interface AddServicesProps {
  onServiceAdded: () => void; 
}

export function AddServices({ onServiceAdded }: AddServicesProps) {
  const [open, setOpen] = useState(false);

  const initialValues: valuesProps = {
    name: "",
    description: "",
    image: null,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: AddServicesSchema,
    onSubmit: async (values: valuesProps) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        if (values.image) {
          formData.append("image", values.image);
        }

        const response = await addServiceApi(formData);
        if (response?.data?.success) {
          resetForm();
          onServiceAdded();
          setOpen(false);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    setFieldValue("image", file);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-black hover:bg-black"
          onClick={() => setOpen(true)}
        >
          Add service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action="" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Service</DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new service. Click save when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Enter service name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-md !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {touched.name && errors.name && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Enter service description</label>
              <textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-md !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {touched.description && errors.description && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.description}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image">Upload image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 rounded-md !border-t-blue-gray-200 text-center focus:!border-t-gray-900"
              />
              {touched.image && errors.image && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.image}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
