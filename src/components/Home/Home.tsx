import { FC } from 'react';
import Dashboard from '../Dashboard';
import Filters from '../Filters';
import AppOverview from '../AppOverview';
import Recommended from '../Recommended';
import { Wrapper } from './Home.styled';

const Home: FC = () => {
  return (
    <Wrapper>
      <Dashboard>
        <Filters />
        <AppOverview />
      </Dashboard>
      <Recommended />
    </Wrapper>
  );
};

export default Home;
