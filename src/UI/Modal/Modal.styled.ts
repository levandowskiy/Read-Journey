import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import {COLORS} from '../../theme'

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

export const CloseIcon = styled.svg`
  width: 22px;
  height: 22px;
  margin-left: auto;
  margin-bottom: 12px;
  cursor: pointer;
`;