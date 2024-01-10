import styled from "@emotion/styled";
import { FormControl, Select } from "@mui/material";
import BookCard from "../BookCard";

export const HeaderLibraryBooks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledFormControl = styled(FormControl)`
  border: 1px solid #3E3E3E;
  border-radius: 12px;
  .MuiMenu-root ul{
  background-color: white;
  color: #0F4D81;
}
`
export const StyledSelect = styled(Select)`
  color: white;
`

export const LibraryBookCard = styled(BookCard)`
   
`