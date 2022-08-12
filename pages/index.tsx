import type { NextPage } from 'next';
import { Card, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container padding={2} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='Pending tasks' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='In process' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='Completed' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
