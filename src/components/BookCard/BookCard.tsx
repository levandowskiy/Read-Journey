import { FC } from 'react';
import {
  Img,
  BookInfo,
  BookTitle,
  Author,
  Button,
  BookInterface,
  Icon,
} from './BookCard.styled';
import { Grid } from '@mui/material';
import { IBook } from '../../types/data';
import { useDispatch } from 'react-redux';
import { deleteBookThunk } from '../../redux/booksSlice';
import svg from '../../assets/img/sprite.svg';

const BookCard: FC<IBook> = ({
  id,
  imageUrl,
  title,
  author,
  handleOpen,
  imgWidth,
  imgHeight,
  cardButton
}) => {
  const dispatch = useDispatch();

  return (
    <Grid item >
      <Img
        data-id={id}
        onClick={handleOpen}
        src={imageUrl}
        alt="book image"
        style={{
          width: imgWidth,
          height: imgHeight,
        }}
      />
      <BookInterface>
        <BookInfo>
          <BookTitle>{title}</BookTitle>
          <Author>{author}</Author>
        </BookInfo>
        {
          cardButton &&
          < Button onClick={() => { dispatch(deleteBookThunk(id)) }}>
            <Icon>
              <use href={svg + "#icon-styledTrash"}></use>
            </Icon>
          </Button>
        }


      </BookInterface>
    </Grid >
  );
};

export default BookCard;