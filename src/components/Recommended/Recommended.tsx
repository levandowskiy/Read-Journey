import react from 'react';
import {
  Wrapper,
  Title,
  HeaderRecommendation,
} from './Recommended.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksThunk } from '../../redux/booksSlice';
import Pagination from '../Pagination';
import BookList from '../BookList';
import ModalAddToLibrary from '../ModalAddToLibrary';

const Recommended: react.FC = () => {
  const currentPage = useSelector((state: any) => state.books.currentPage);
  const books = useSelector((state: any) => state.books.items);
  const title = useSelector((state: any) => state.filters.title);
  const author = useSelector((state: any) => state.filters.author)
  const dispatch = useDispatch();

  react.useEffect(() => {
    dispatch(getBooksThunk(currentPage))
  }, [dispatch, currentPage]); 

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
      <ModalAddToLibrary/>
    </Wrapper>
  );
};

export default Recommended;
