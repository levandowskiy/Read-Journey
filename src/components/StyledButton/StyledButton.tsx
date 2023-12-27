import styled from '@emotion/styled';
import { COLORS } from '../../theme';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  color: ${COLORS.WHITE};
  border: 1px ${COLORS.LIGHT_GRAY} solid;
  padding: 12px 28px;
  border-radius: 30px;
  padding: 12px 28px;
`;

export default StyledButton;
