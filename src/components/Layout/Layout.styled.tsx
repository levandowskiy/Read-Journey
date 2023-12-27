import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { COLORS, SIZES } from '../../theme';

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${COLORS.WHITE};

    &::after {
      content: '';
      background-color: ${COLORS.BLUE};
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      position: relative;
      top: 8px;
    }
  }
`;

export const NavBar = styled(AppBar)`
  max-width: 1216px;
  position: static;
  background-color: ${COLORS.DARK_GRAY};
  display: flex;
  flex-direction: row;
  height: 74px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 16px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const LogoText = styled.div`
  font-size: ${SIZES.FONT.REGULAR};
  font-weight: ${SIZES.WEIGHT.W700};
  text-transform: uppercase;
  color: ${COLORS.WHITE};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;
  font-size: ${SIZES.FONT.MEDIUM};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
`;
export const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`;
