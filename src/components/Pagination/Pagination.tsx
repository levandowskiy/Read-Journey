import { FC } from 'react';
import { StyledPagination } from './Pagination.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from '../../redux/booksSlice';

const Pagination: FC = () => {
  const totalPages = useSelector((state:any) => state.books.totalPages);
  const currentPage = useSelector((state:any) => state.books.currentPage);
  const dispatch = useDispatch();

  const handlerArrowBtn = (event: React.ChangeEvent<unknown>) => {

    const isNextBtn = (
      event.currentTarget as HTMLButtonElement
    ).ariaLabel?.includes('next');

    if (isNextBtn) {
      dispatch(nextPage(currentPage))
    } else {
      dispatch(prevPage(currentPage))
    }
  };

  return (
    <StyledPagination
    count={totalPages}
    page={currentPage}
    onChange={handlerArrowBtn}
    variant="outlined"
  />
  );
};

export default Pagination;