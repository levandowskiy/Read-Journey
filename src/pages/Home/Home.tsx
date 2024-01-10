import { FC } from 'react';
import Dashboard from '../../UI/Dashboard';
import Filters from '../../components/Filters';
import AppOverview from '../../components/AppOverview';
import Recommended from '../../components/Recommended';
import MainSectionWrapper from '../../UI/MainSectionWrapper';

const Home: FC = () => {
  return (
    <>
      <Dashboard>
        <Filters />
        <AppOverview />
      </Dashboard>
      <MainSectionWrapper>
        <Recommended />
      </MainSectionWrapper>
    </>
  );
};

export default Home;
