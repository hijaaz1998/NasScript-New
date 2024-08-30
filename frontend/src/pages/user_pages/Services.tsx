import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import ServiceCard from "../../components/user_components/common/service_card/ServiceCard";
import { serviceCardProps } from "@/components/user_components/common/service_card/type";
import { fetchServiceApi } from "@/api/Route";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ref1, { once: true });

  const [servicesData, setServicesData] = useState<serviceCardProps[]>([]);

  const fetchServices = async () => {
    try {
      const response = await fetchServiceApi();
      if (response?.data?.success) {
        setServicesData(response.data.data);
      }
    } catch (err) {
      console.error("Error occurred during API call:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-purple-500 py-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold">Our Services</h1>
            <p className="mt-4 text-1xl text-center text-white">
              From consulting and strategy development to implementation and
              support, <br /> our comprehensive services can help your business
              thrive.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView1 ? "show" : "hidden"}
        className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        ref={ref1}
      >
        {servicesData.map((service) => (
          <Link to={`/services/${service._id}`} key={service._id}>
            <ServiceCard
              imgSrc={service.image}
              title={service.name}
              description={service.description}
              _id={service._id}
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
