import { FC } from 'react';
import { Typography, MenuItem } from '@mui/material';
import { HeaderLibraryBooks, StyledFormControl, StyledSelect } from './LibraryBooks.styled';
import { useDispatch, useSelector } from 'react-redux';
import { secondFilter } from '../../redux/filtersSlice';
import Modal from '../../UI/Modal';
import BookList from '../BookList';
import { Link } from 'react-router-dom';
import StyledButton from '../../UI/StyledButton';
import { closeModal } from '../../redux/toggleModalSlice';

const LibraryBooks: FC = () => {
  const library = useSelector((state: any) => state.books.library);
  const status = useSelector((state: any) => state.filters.status);
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

      <BookList books={libraryFilter} />
      <Modal>
        <Link to={'/reading'}>
          <StyledButton onClick={() => dispatch(closeModal())}>Start reading</StyledButton>
        </Link>
      </Modal>
    </>
  );
};

export default LibraryBooks;