import styled from '@emotion/styled';
import { Input } from '@mui/material';
import { COLORS } from '../../theme';

const StyledInput = styled(Input)`
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 12px;
  padding: 14px 16px;
  color: white;

  &:hover{
    outline: 1px solid ${COLORS.LIGHT_GRAY};
  }

  input: {
    padding: 0,
  },
`;

export default StyledInput;
