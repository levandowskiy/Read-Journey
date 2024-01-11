import styled from "@emotion/styled";
import { COLORS } from '../../theme'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 44px;
`

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  padding: 40px;
`

const iconStyled = `
  width: 50px;
  height: 50px;
`

export const RecordIcon = styled.svg`
 ${iconStyled}
`

export const StopIcon = styled.svg`
  ${iconStyled}
`