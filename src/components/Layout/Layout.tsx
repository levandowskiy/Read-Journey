import { Outlet } from 'react-router-dom';
import {
  NavBar,
  LinkWrapper,
  LogoWrapper,
  LogoText,
  StyledNavLink,
  MainWrapper,
  Logo
} from './Layout.styled';
import { Container } from '@mui/material';
import { Suspense } from 'react';
import svg from '../../assets/img/sprite.svg';

function Layout() {
  return (
    <Container sx={{ maxWidth: '1265px !important' }}>
      <NavBar>
        <LogoWrapper>
          <Logo >
            <use href={svg+"#icon-logo"}></use>
          </Logo>
          <LogoText>read journey</LogoText>
        </LogoWrapper>

        <LinkWrapper>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
          <StyledNavLink to={'/library'}>Library</StyledNavLink>
        </LinkWrapper>

        <div>ШОТО</div>
      </NavBar>
      <MainWrapper>
        <Suspense fallback={<div>LOADING</div>}>
          <Outlet />
        </Suspense>
      </MainWrapper>
    </Container>
  );
}

export default Layout;
