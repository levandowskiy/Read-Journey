import { FC } from 'react';
import Dashboard from '../../UI/Dashboard';
import MainSectionWrapper from '../../UI/MainSectionWrapper';
import MyReading from '../../components/MyReading';
import AddReading from '../../components/AddReading';

const Reading: FC = () => {
  return (
    <>
    <Dashboard>
      <AddReading/>
    </Dashboard>
    <MainSectionWrapper>
      <MyReading/>
    </MainSectionWrapper>
    </>
  );
};

export default Reading;