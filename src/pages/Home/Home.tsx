import { FC } from 'react';
import Dashboard from '../../UI/Dashboard';
import Filters from '../../components/Filters';
import AppOverview from '../../components/AppOverview';
import Recommended from '../../components/Recommended';

const Home: FC = () => {
  return (
    <>
      <Dashboard>
        <Filters />
        <AppOverview />
      </Dashboard>
      <Recommended />
    </>
  );
};

export default Home;
