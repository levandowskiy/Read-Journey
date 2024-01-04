import { FC } from 'react';
import { Typography, MenuItem } from '@mui/material';
import { BooksList } from '../Recommended/Recommended.styled';
import { HeaderLibraryBooks, StyledFormControl, StyledSelect, LibraryBookCard } from './LibraryBooks.styled';
import { useDispatch, useSelector } from 'react-redux';
import { secondFilter } from '../../redux/filtersSlice';

const LibraryBooks: FC = () => {
  const library = useSelector((state: any) => state.books.library);
  const status = useSelector((state: any) => state.filters.status)
  const dispatch = useDispatch();

  const handlerChange = (event: any) => {
    dispatch(secondFilter(event.target.value))
  }

  const libraryFilter = status === "All books" ? library : library.filter((book: any) => {
    return book.status === status.toLowerCase()
  })



  return (
    <>
      <HeaderLibraryBooks>
        <Typography variant='h2'>My library</Typography>

        <StyledFormControl sx={{ m: 1, minWidth: 153, }} >
          <StyledSelect
            id="demo-simple-select"
            defaultValue={"All books"}
            value={status}
            sx={{

              '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },

            }}
            onChange={handlerChange}
          >
            <MenuItem value={"Unread"}>Unread</MenuItem>
            <MenuItem value={"In progress"}>In progress</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
            <MenuItem value={"All books"}>All books</MenuItem>
          </StyledSelect>
        </StyledFormControl>
      </HeaderLibraryBooks>
      <BooksList
        container
        rowSpacing={2}
        sx={{ columnGap: '20px' }}
      >
        {
          libraryFilter.map(({ imageUrl, title, author, _id }: any) => {
            return <LibraryBookCard key={_id} id={_id} imageUrl={imageUrl} title={title} author={author} isLibraryBookCard={true} />
          })
        }
      </BooksList>
    </>
  );
};

export default LibraryBooks;