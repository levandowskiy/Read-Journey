import { FC } from 'react';
import { Wrapper } from './MainSectionWrapper.styled';

interface IMainSectionWrapper {
  children: React.ReactNode
}

const MainSectionWrapper: FC<IMainSectionWrapper> = ({children}) => {
  return (
    <Wrapper>    
      {children}
    </Wrapper>
  );
};

export default MainSectionWrapper;