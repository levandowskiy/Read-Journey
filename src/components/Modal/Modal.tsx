import { FC } from 'react';
import {
  ModalWrapper,
  StyledModal,
  CloseIcon,
} from './Modal.styled';
import BookCard from '../BookCard';
import StyledButton from '../StyledButton';
import { IBook } from '../../types/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBookThunk, addBookThunk } from '../../redux/booksSlice';
import Notiflix from 'notiflix';

interface ModalProps {
  curentBook: IBook | null;
  open: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ curentBook, handleClose, open }) => {

  const dispatch = useDispatch();
  const library = useSelector((state: any) => state.books.library);

  const heandlerAddBook = () => {
    handleClose();
    Notiflix.Notify.success(
      'The book has been added to the library',
      {
        width: "320px",
      }
    );

    dispatch(addBookThunk(curentBook?._id))
  }

  const heandlerDeleteBook = () => {
    handleClose();

    Notiflix.Notify.success(
      'The book has been deleted to the library',
      {
        width: "320px",
      }
    );

    const book = library.filter((item: any) => item.title === curentBook?.title)[0];
    dispatch(deleteBookThunk(book._id))
  }


  return (
    curentBook &&
    <StyledModal open={open} onClose={handleClose}>
      <ModalWrapper>
        <CloseIcon onClick={handleClose} />
        <div>
          <BookCard id={curentBook.id}
            imageUrl={curentBook.imageUrl}
            author={curentBook.author}
            title={curentBook.title} 
            totalPages={curentBook.totalPages}
            />
        </div>

        {
          library.some((book: any) => book.title === curentBook?.title) ?
            <StyledButton onClick={heandlerDeleteBook}>Delete to library</StyledButton> :
            <StyledButton onClick={heandlerAddBook}>Add to library</StyledButton>
        }
      </ModalWrapper>
    </StyledModal>
  );
};

export default Modal;
