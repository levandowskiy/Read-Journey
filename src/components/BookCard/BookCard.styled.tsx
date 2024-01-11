import styled from "@emotion/styled";
import { SIZES, COLORS } from "../../theme";

export const Img = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  cursor: pointer;
`;

export const BookInfo = styled.div`
  & > *:not(:first-of-type) {
    margin-top: 2px;
  }
`;

export const BookTitle = styled.h4`
  font-size: 20px;
  width: 89px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 10px;
  line-height: 18px;
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};  
  margin-top: 2px;
`;

export const Pages = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  margin-top: 4px;
`

export const Button = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  margin-left: 14px;
`

export const BookInterface = styled.div`
  padding-top: 8px;
  /* padding-bottom: 32px; */
  display: flex;

  width: 137px;
`

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
`