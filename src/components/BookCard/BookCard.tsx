import { FC } from 'react';
import { Img, BookInfo, BookTitle, Author, Pages } from './BookCard.styled';
import { Grid } from '@mui/material';
import { IBook } from '../../types/data';

const BookCard: FC<IBook> = ({ id, imageUrl, title, author, handleOpen, totalPages }) => {

  return (
    <Grid item >
      <Img
        data-id={id}
        onClick={handleOpen}
        src={imageUrl}
        alt="book image"
      />
      <BookInfo>
        <BookTitle>{title}</BookTitle>
        <Author>{author}</Author>
        <Pages>{totalPages}</Pages>
      </BookInfo>
    </Grid>
  );
};

export default BookCard;