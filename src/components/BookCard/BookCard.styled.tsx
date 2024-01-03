import styled from "@emotion/styled";
import { SIZES, COLORS } from "../../theme";

export const Img = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  cursor: pointer;
`;

export const BookInfo = styled.div`
  padding-top: 8px;
  padding-bottom: 32px;
  text-align: center;

  & > *:not(:first-of-type) {
    margin-top: 2px;
  }
`;

export const BookTitle = styled.h4`
  font-size: 20px;
  width: 137px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 14px;
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