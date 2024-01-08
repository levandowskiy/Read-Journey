import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../theme';
import StyledButton from '../../UI/StyledButton';

export const Form = styled.form`
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const FormTitle = styled.legend`
  color: ${COLORS.WHITE};
  font-size: ${SIZES.FONT.SMALL};
  font-weight: ${SIZES.WEIGHT.W500};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;

export const FiltersButton = styled(StyledButton)`
  margin-top: 12px;
`;
