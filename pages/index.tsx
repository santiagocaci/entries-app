import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

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
            <CardContent>
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='In process' />
            <CardContent>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='Completed' />
            <CardContent>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
