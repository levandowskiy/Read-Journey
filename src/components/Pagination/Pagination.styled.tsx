import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { COLORS } from '../../theme';

export const StyledPagination = styled(Pagination)({
  '& > ul > li:not(:first-of-type):not(:last-child)': {
    display: 'none',
  },

  '& > ul > li > :first-of-type, & > ul > li > :last-child': {
    borderColor: `${COLORS.LIGHT_GRAY}`,
  },
});