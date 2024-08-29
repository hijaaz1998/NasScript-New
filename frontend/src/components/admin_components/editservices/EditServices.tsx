import { useEffect, useState } from "react";
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
import { editServiceApi, fetchSingleServiceApi } from "@/api/Route";
import { valuesProps } from "../add_services/type";
import { useFormik } from "formik";
import { AddServicesSchema } from "@/yup/validation";

interface EditServicesProps {
  serviceId: number;
  onServiceAdded: () => void;
}

export function EditServices({ serviceId, onServiceAdded }: EditServicesProps) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<valuesProps | null>(null);

  const fetchSingleservice = async () => {
    const response = await fetchSingleServiceApi(serviceId);
    if (response?.data?.success) {
      setService(response.data.data[0]);
    }
  };

  useEffect(() => {
    if (serviceId) {
      fetchSingleservice();
    }
  }, [serviceId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: service?.name || "",
      description: service?.description || "",
      image: null,
    },
    validationSchema: AddServicesSchema,
    onSubmit: async (values: valuesProps) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        if (values.image) {
          formData.append("image", values.image);
        }
        const response = await editServiceApi(serviceId, formData);
        console.log(response);
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

  const { resetForm, values, handleChange, handleBlur, setFieldValue, handleSubmit, touched, errors } = formik;

  return (
    service && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-blue-700" onClick={() => setOpen(true)}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>
                Edit the details below to update the service. Click save when you're done.
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
                  <p className="pt-2 text-xs italic text-red-500">{errors.name}</p>
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
                  <p className="pt-2 text-xs italic text-red-500">{errors.description}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image">Upload image</label>
               
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files?.[0] || service.image);
                  }}
                  className="border border-gray-300 rounded-md !border-t-blue-gray-200 text-center focus:!border-t-gray-900"
                />
                {touched.image && errors.image && (
                  <p className="pt-2 text-xs italic text-red-500">{errors.image}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  );
}
