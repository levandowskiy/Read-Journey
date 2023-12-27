import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../theme';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoBlock = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};

  & > :nth-of-type(3) {
    margin-top: 20px;
  }
`;
export const QuoteBlock = styled(InfoBlock)`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Title = styled(Typography)`
  margin-bottom: 40px;
`;

export const Circle = styled.div`
  display: flex;
  width: 44px !important;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BLACK};
  font-size: ${SIZES.FONT.BIG};
  background-color: white;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.LIGHT_GRAY};
  font-size: ${SIZES.FONT.SMALL};
  text-decoration: underline;
  margin-top: 26px;
`;

export const Icon = styled.p`
  font-size: 40px;
`;
