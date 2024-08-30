import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { fetchSingleServiceApi } from '@/api/Route';
import { serviceCardProps } from '@/components/user_components/common/service_card/type';

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const validServiceid = serviceId ?? '';
  const [service, setService] = useState<serviceCardProps | null>(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetchSingleServiceApi(validServiceid);
        console.log('single', response);
        if (response?.data?.success) {
          setService(response.data.data);
        }
      } catch (err) {
        console.error('Error fetching service details:', err);
      }
    };

    if (validServiceid) {
      fetchServiceDetails();
    }
  }, [validServiceid]);

  if (!service) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
            <CardMedia
              component="img"
              image={service.image}
              alt={service.name}
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 'auto', md: '100%' },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 3 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {service.name}
              </Typography>
              <Typography variant="body1" paragraph>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetails;
