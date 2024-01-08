import { FC } from 'react';
import Modal from '../../UI/Modal'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/toggleModalSlice';
import { addBookThunk, deleteBookThunk } from '../../redux/booksSlice';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import StyledButton from '../../UI/StyledButton';

const ModalAddToLibrary: FC = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());
  const curentBook = useSelector((state: any) => state.modal.currentBook);
  const library = useSelector((state: any) => state.books.library);

  const heandlerAddBook = () => {
    handleClose();

    Notiflix.Notify.success('The book has been added to the library');

    dispatch(addBookThunk(curentBook?._id));
  }

  const heandlerDeleteBook = () => {
    handleClose();

    Notiflix.Notify.success('The book has been deleted to the library');

    const book = library.filter((item: any) => item.title === curentBook?.title)[0];
    dispatch(deleteBookThunk(book._id))
  }

  return (
    <Modal>
      <StyledButton onClick={heandlerAddBook}>Add to library</StyledButton>
    </Modal>
  );
};

export default ModalAddToLibrary;