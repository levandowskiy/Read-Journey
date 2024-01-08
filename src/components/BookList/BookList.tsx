import { FC } from 'react';
import { BooksList } from './BookList.styled'
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/toggleModalSlice'
import { setCurrentBook } from '../../redux/toggleModalSlice';
import { IBook } from '../../types/data';

interface BookListProps {
  books: IBook[];
}

const BookList: FC<BookListProps> = ({books}: any) => {
  // const currentPage = useSelector((state: any) => state.books.currentPage)
  const dispatch = useDispatch();

  const handlerOpenModal = (event: any) => {
    const idBook = event.target?.dataset.id;
    const book = books.filter(({ _id }: any) => idBook === _id)[0];

    dispatch(setCurrentBook(book))
    dispatch(openModal())
  };

 
  return (
    <>
      <BooksList
        container
        rowSpacing={2}
        sx={{ columnGap: '20px' }}
      >
        {
          books?.map(({ _id, author, imageUrl, title }: any) => (
            <BookCard
              key={_id}
              id={_id}
              imageUrl={imageUrl}
              author={author}
              title={title}
              handleOpen={handlerOpenModal}
            />
          ))}
      </BooksList>
    </>
  );
};

export default BookList;