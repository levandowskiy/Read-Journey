import { FC } from 'react';
import MainSectionWrapper from '../../UI/MainSectionWrapper';
import Dashboard from '../../UI/Dashboard';
import LibraryBooks from '../../components/LibraryBooks';

const Library: FC = () => {
  return (
    <>
      <Dashboard>
      </Dashboard>
      <MainSectionWrapper>
        <LibraryBooks />
      </MainSectionWrapper>
    </>
  )
};

export default Library;
