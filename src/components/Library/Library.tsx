import { FC } from 'react';
// import {  } from './Library.styled';
import MainSectionWrapper from '../MainSectionWrapper';
import { Wrapper } from '../Home/Home.styled';
import Dashboard from '../Dashboard';
import LibraryBooks from '../LibraryBooks';

const Library: FC = () => {
  return (
    <Wrapper>
      <Dashboard>
 
      </Dashboard>
     <MainSectionWrapper>
        <LibraryBooks/>
     </MainSectionWrapper>
    </Wrapper>
  ) 
};

export default Library;
