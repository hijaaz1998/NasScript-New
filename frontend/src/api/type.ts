interface Service {
    id: number;
    service_name: string;
    description: string;
    image_url: string;
    created_at: string;
  }
  
 export interface FetchServicesResponse {
    data: {
      data: Service[];
    };
  }