import { FC, useState, useEffect } from 'react';
import {
  Wrapper,
  Title,
  HeaderRecommendation,
  StyledPagination,
  BooksList,
} from './Recommended.styled';
import BookCard from '../BookCard';
import { getBooksRecomended } from '../../api/books';
import Modal from '../Modal';
import { IBook } from '../../types/data';

const Recommended: FC = () => {
  const [books, setBooks] = useState([]);
  const [curentBook, setCurentBook] = useState<IBook | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBooksRecomended(page)
      .then(({ totalPages, results }) => {
        setBooks(results);
        setTotalPages(totalPages);
      })
      .catch(error => console.error('Error during fetch:', error));
  }, [page]);

  const handlerArrowBtn = (event: React.ChangeEvent<unknown>) => {
    const isNextBtn = (
      event.currentTarget as HTMLButtonElement
    ).ariaLabel?.includes('next');

    if (isNextBtn) {
      setPage(prevPage => prevPage + 1);
    } else {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleOpen = (event: any) => {
    const idBook = event.target?.dataset.id;
    const book = books.filter(({ _id }) => idBook === _id);

    setCurentBook(book[0]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <HeaderRecommendation>
        <Title variant="h2">Recommended</Title>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handlerArrowBtn}
          variant="outlined"
        />
      </HeaderRecommendation>

      <BooksList
        container
        rowSpacing={2}
        sx={{ columnGap: '20px' }}
      >
        {books &&
          books.map(({ _id, author, imageUrl, title }) => (
            <BookCard key={_id} id={_id} imageUrl={imageUrl} author={author} title={title} handleOpen={handleOpen}/>
          ))}
      </BooksList>
      <Modal curentBook={curentBook} handleClose={handleClose} open={open}/>
    </Wrapper>
  );
};

export default Recommended;
