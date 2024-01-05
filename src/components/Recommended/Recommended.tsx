import { FC, useEffect } from 'react';
import {
  Wrapper,
  Title,
  HeaderRecommendation,
} from './Recommended.styled';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksThunk } from '../../redux/booksSlice';
import Pagination from '../Pagination';
import BookList from '../BookList';
import { deleteBookThunk, addBookThunk } from '../../redux/booksSlice';
import Notiflix from 'notiflix';
import { closeModal } from '../../redux/toggleModalSlice';
import StyledButton from '../../UI/StyledButton';

const Recommended: FC = () => {
  const currentPage = useSelector((state: any) => state.books.currentPage);
  const books = useSelector((state: any) => state.books.items);
  const title = useSelector((state: any) => state.filters.title);
  const author = useSelector((state: any) => state.filters.author)
  const dispatch = useDispatch();
  const library = useSelector((state: any) => state.books.library);
  const curentBook = useSelector((state: any) => state.modal.currentBook);


  useEffect(() => {
    dispatch(getBooksThunk(currentPage))
  }, [dispatch, currentPage]);
  const handleClose = () => dispatch(closeModal());

  const heandlerAddBook = () => {
    handleClose();

    Notiflix.Notify.success('The book has been added to the library');

    dispatch(addBookThunk(curentBook?._id))
  }

  const heandlerDeleteBook = () => {
    handleClose();

    Notiflix.Notify.success('The book has been deleted to the library');

    const book = library.filter((item: any) => item.title === curentBook?.title)[0];
    dispatch(deleteBookThunk(book._id))
  }

  const filterBook = books.filter((book: any) =>
    (title === '' || book.title.toLowerCase().includes(title.toLowerCase())) &&
    (author === '' || book.author.toLowerCase().includes(author.toLowerCase()))
  );

  return (
    <Wrapper>
      <HeaderRecommendation>
        <Title variant="h2">Recommended</Title>
        <Pagination />
      </HeaderRecommendation>
      <BookList books={filterBook} />

      <Modal>
        <StyledButton onClick={heandlerAddBook}>Add to library</StyledButton>
      </Modal>
    </Wrapper>
  );
};

export default Recommended;
