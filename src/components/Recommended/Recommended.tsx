import { FC, useState, useEffect } from 'react';
import {
  Wrapper,
  Title,
  HeaderRecommendation,
  StyledPagination,
  BooksList,
} from './Recommended.styled';
import BookCard from '../BookCard';
import Modal from '../Modal';
import { IBook } from '../../types/data';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/toggleModalSlice'
import { nextPage, prevPage, getBooksThunk } from '../../redux/booksSlice';

const Recommended: FC = () => {
  const [curentBook, setCurentBook] = useState<IBook | null>(null);
  const currentPage = useSelector((state: any) => state.books.currentPage)
  const showModal = useSelector((state: any) => state.modal.showModal);
  const books = useSelector((state: any) => state.books.items);
  const totalPages = useSelector((state: any) => state.books.totalPages);
  const title = useSelector((state: any) => state.filters.title);
  const author = useSelector((state: any) => state.filters.author)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk(currentPage))
  }, [dispatch, currentPage]);

  const handlerArrowBtn = (event: React.ChangeEvent<unknown>) => {
    dispatch(nextPage(currentPage))

    const isNextBtn = (
      event.currentTarget as HTMLButtonElement
    ).ariaLabel?.includes('next');

    if (isNextBtn) {
      dispatch(nextPage(currentPage))
    } else {
      dispatch(prevPage(currentPage))
    }
  };

  const handlerOpenModal = (event: any) => {
    const idBook = event.target?.dataset.id;
    const book = books.filter(({ _id }: any) => idBook === _id)[0];

    setCurentBook(book);
    dispatch(openModal())
  };

  const filterBook = books.filter((book: any) =>
    (title === '' || book.title.toLowerCase().includes(title.toLowerCase())) &&
    (author === '' || book.author.toLowerCase().includes(author.toLowerCase()))
  );

  return (
    <Wrapper>
      <HeaderRecommendation>
        <Title variant="h2">Recommended</Title>
        <StyledPagination
          count={totalPages}
          page={currentPage}
          onChange={handlerArrowBtn}
          variant="outlined"
        />
      </HeaderRecommendation>

      <BooksList
        container
        rowSpacing={2}
        sx={{ columnGap: '20px' }}
      >
        {filterBook &&
          filterBook.map(({ _id, author, imageUrl, title }: any) => (
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
      <Modal curentBook={curentBook} open={showModal} handleClose={() => dispatch(closeModal())} />
    </Wrapper>
  );
};

export default Recommended;
