import { FC } from 'react';
import {
  Img,
  BookInfo,
  BookTitle,
  Author,
  Pages,
  Button,
  BookInterface
} from './BookCard.styled';
import { Grid } from '@mui/material';
import { IBook } from '../../types/data';
import { useDispatch } from 'react-redux';
import { deleteBookThunk } from '../../redux/booksSlice';


const BookCard: FC<IBook> = ({
  id,
  imageUrl,
  title,
  author,
  handleOpen,
  totalPages,
  isLibraryBookCard,
  isModalBookCard
}) => {
  const dispatch = useDispatch();

  return (
    <Grid item >
      <Img
        data-id={id}
        onClick={handleOpen}
        src={imageUrl}
        alt="book image"
      />
      <BookInterface>
        <BookInfo>
          <BookTitle>{title}</BookTitle>
          <Author>{author}</Author>
          {
            isModalBookCard &&
            <Pages>{totalPages}</Pages>
          }
        </BookInfo>

        {
          isLibraryBookCard &&
          <Button onClick={() => { dispatch(deleteBookThunk(id)) }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#E85050" fillOpacity="0.1" />
              <circle cx="14" cy="14" r="13.5" stroke="#E85050" strokeOpacity="0.2" />
              <path d="M8.75 10.5H9.91667H19.25" stroke="#E85050" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.0833 10.5V18.6666C18.0833 18.976 17.9604 19.2728 17.7416 19.4916C17.5228 19.7104 17.226 19.8333 16.9166 19.8333H11.0833C10.7739 19.8333 10.4771 19.7104 10.2583 19.4916C10.0395 19.2728 9.91663 18.976 9.91663 18.6666V10.5M11.6666 10.5V9.33329C11.6666 9.02387 11.7895 8.72713 12.0083 8.50833C12.2271 8.28954 12.5239 8.16663 12.8333 8.16663H15.1666C15.476 8.16663 15.7728 8.28954 15.9916 8.50833C16.2104 8.72713 16.3333 9.02387 16.3333 9.33329V10.5" stroke="#E85050" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.8334 13.4166V16.9166" stroke="#E85050" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.1666 13.4166V16.9166" stroke="#E85050" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        }
      </BookInterface>
    </Grid>
  );
};

export default BookCard;