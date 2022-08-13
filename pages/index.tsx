import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { EntryList, NewEntry } from '../components/ui';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container padding={2} spacing={2}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: 'calc(100vh - 96px)',
            }}
          >
            <CardHeader title='Pending tasks' sx={{ paddingBottom: 0.5 }} />
            <CardContent>
              <NewEntry />
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
