import { FC } from 'react';
import {
  CardWrapper,
  Wrapper,
  RecordIcon,
  StopIcon,
} from './MyReading.styled';
import { Typography } from '@mui/material';
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';
import svg from '../../assets/img/sprite.svg';

const MyReading: FC = () => {
  const curentBook = useSelector((state: any) => state.modal.currentBook);
  const isReading = useSelector((state: any) => state.books.isReading)

  const { id, imageUrl, title, author } = curentBook

  return (
    <Wrapper>
      <Typography variant='h2'>
        My reading
      </Typography>

      <CardWrapper>
        <BookCard
          id={id}
          imageUrl={imageUrl}
          title={title}
          author={author}
          imgWidth={224}
          imgHeight={340}
        />

        {isReading ?
          <StopIcon>
             <use href={svg+"#icon-stopRecord"}></use>
          </StopIcon>
          :
          <RecordIcon>
            <use href={svg+"#icon-record"}></use>
          </RecordIcon>
        }
      </CardWrapper>
    </Wrapper>
  );
};

export default MyReading;