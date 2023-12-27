import { FC } from 'react';
import { Img,  BookInfo, BookTitle, Author } from './BookCard.styled';
import { Grid} from '@mui/material';
import { IBook } from '../../types/data';

const BookCard: FC<IBook> = ({id, imageUrl, title, author, handleOpen}) => {

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
      </BookInfo>
    </Grid>
  );
};

export default BookCard;