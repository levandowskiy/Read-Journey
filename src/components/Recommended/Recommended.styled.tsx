import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../theme';
import { Typography, Grid, Pagination, Modal } from '@mui/material';

export const Wrapper = styled.div`
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  padding: 40px;
`;

export const Title = styled(Typography)`
  margin-bottom: 24px;
`;

export const HeaderRecommendation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPagination = styled(Pagination)({
  '& > ul > li:not(:first-child):not(:last-child)': {
    display: 'none',
  },

  '& > ul > li > :first-child, & > ul > li > :last-child': {
    borderColor: `${COLORS.LIGHT_GRAY}`,
  },
});

export const BooksList = styled(Grid)`
  max-width: 767px;
`

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 483px;
  background-color: ${COLORS.BLACK};
  outline: 0;
  border-radius: 12px;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


