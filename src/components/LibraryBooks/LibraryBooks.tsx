import { FC } from 'react';
import { Typography, MenuItem } from '@mui/material';
import { BooksList } from '../Recommended/Recommended.styled';
import { HeaderLibraryBooks, StyledFormControl, StyledSelect, LibraryBookCard } from './LibraryBooks.styled';
import { useSelector } from 'react-redux';

const LibraryBooks: FC = () => {
  const library = useSelector((state:any) => state.books.library);
  console.log(library);
  
  return (
    <>
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
      <BooksList
       container
       rowSpacing={2}
       sx={{ columnGap: '20px' }}
      >
        {          
          library.map(({imageUrl, title, author, _id}:any) => {
            return <LibraryBookCard key={_id} id={_id} imageUrl={imageUrl} title={title} author={author} isLibraryBookCard={true} />       
          })         
        }
      </BooksList>
    </>
  );
};

export default LibraryBooks;