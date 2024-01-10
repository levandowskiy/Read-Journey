import { FC } from 'react';
import { CardWrapper, Wrapper } from './MyReading.styled';
import { Typography } from '@mui/material';
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';

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
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24" stroke="#F9F9F9" stroke-width="2" />
            <rect x="15" y="15" width="20" height="20" rx="3" fill="#E90516" />
          </svg>
          :
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="20" fill="#E90516" />
            <circle cx="25" cy="25" r="24" stroke="#F9F9F9" stroke-width="2" />
          </svg>
        }




      </CardWrapper>
    </Wrapper>
  );
};

export default MyReading;