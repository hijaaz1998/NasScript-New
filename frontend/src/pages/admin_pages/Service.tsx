import { useEffect, useState } from "react";
import { deleteService, fetchServiceApi } from "@/api/Route";
import { AddServices } from "../../components/admin_components/add_services/AddServices";
import { ServiceProps } from "./type"; // Import the ServiceProps interface
import { EditServices } from "@/components/admin_components/editservices/EditServices";

const Service = () => {
  const [services, setServices] = useState<ServiceProps[]>([]);

  const fetchServices = async () => {
    try {
      const response = await fetchServiceApi();
      if (response?.data?.success) {
        setServices(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  const handleDelete = async (serviceid:number) =>{
    try{
      const response = await deleteService(serviceid)
      if (response?.data?.success) {
        fetchServices()
      }
      
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);
  console.log('services',services)

  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddServices onServiceAdded={fetchServices} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40">
              <img
                className="w-full h-full object-cover"
                src={service.image}
                alt={service.name}
              />
            </div>
            <h3 className="text-lg font-semibold my-2">{service.name}</h3>
            <p>{service.description}</p>
            <div className="flex justify-end mt-4 space-x-2">
              <EditServices serviceId={service._id} onServiceAdded={fetchServices}/>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(service._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
