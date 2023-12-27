import { FC, ReactNode } from 'react';
import { Wrapper } from './Dashboard.styled';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: FC<DashboardProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Dashboard;
