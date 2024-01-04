import { FC } from 'react';
import { Typography, MenuItem } from '@mui/material';
import { HeaderLibraryBooks, StyledFormControl, StyledSelect } from './LibraryBooks.styled';

const LibraryBooks: FC = () => {
  return (
    <HeaderLibraryBooks>
      <Typography variant='h2'>My library</Typography>

      <StyledFormControl sx={{ m: 1, minWidth: 153, }} >
        <StyledSelect        
          id="demo-simple-select"
          value={20}
          sx={{
           
            '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
            
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </HeaderLibraryBooks>
  );
};

export default LibraryBooks;