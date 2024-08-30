import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

const getToken = () => {
  return localStorage.getItem("token");
};

const getConfig = (includeToken: boolean = true) => {
  const config: any = {
    withCredentials: true,
  };
  
  if (includeToken) {
    config.headers = {
      "Authorization": `Bearer ${getToken()}`,
    };
  }
  
  return config;
};

export const addServiceApi = async (data: FormData) => {
  try {
    const config = {
      ...getConfig(),
      headers: {
        ...getConfig().headers,
        "Content-Type": "multipart/form-data",
      },
    };

    return await userApi.post("/addservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const fetchServiceApi = async () => {
  try {
    return await userApi.get("/services", getConfig(false));
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const fetchLoginApi = async (email: string, password: string) => {
  try {
    const response = await userApi.post("/login", { email, password }, getConfig(false));
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};


export const fetchSingleServiceApi = async (serviceId: number) => {
  try {
    return await userApi.get(`/editservice/${serviceId}`, getConfig());
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const editServiceApi = async (serviceId: number, data: FormData) => {
  try {
    const config = {
      ...getConfig(),
      headers: {
        ...getConfig().headers,
        "Content-Type": "multipart/form-data",
      },
    };

    data.append("serviceId", serviceId.toString());

    return await userApi.put("/editservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const deleteService = async (serviceId: number) => {
  try {
    return await userApi.delete(`/deleteservice/${serviceId}`, getConfig());
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};
