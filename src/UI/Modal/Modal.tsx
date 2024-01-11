import { FC } from 'react';
import {
  ModalWrapper,
  StyledModal,
  CloseIcon,
} from './Modal.styled';
import BookCard from '../../components/BookCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeModal } from '../../redux/toggleModalSlice';
import svg from '../../assets/img/sprite.svg';


interface ModalProps {
  children?: any;
}

const Modal: FC<ModalProps> = ({ children: button }) => {
  const showModal = useSelector((state: any) => state.modal.showModal);
  const dispatch = useDispatch();
  const curentBook = useSelector((state: any) => state.modal.currentBook);

  const handleClose = () => dispatch(closeModal());
  
  return (
    curentBook &&
    <StyledModal open={showModal} onClose={handleClose}>
      <ModalWrapper>
        <CloseIcon onClick={handleClose}>
          <use  href={svg+'#icon-close'}></use>
        </CloseIcon>
        <div>  
          <BookCard id={curentBook.id}
            imageUrl={curentBook.imageUrl}
            author={curentBook.author}
            title={curentBook.title}
            totalPages={curentBook.totalPages}
            isModalBookCard={true}
          />
        </div>
        { button }
        {/* <ModalButton heandlerClick={heandlerModalBtn} buttonText={buttonText}/> */}
        {/* {
          
            library.some((book: any) => book.title === curentBook?.title) ?
            <StyledButton onClick={heandlerDeleteBook}>Delete to library</StyledButton> :
            <StyledButton onClick={heandlerAddBook}>Add to library</StyledButton>
        }
        {
       
          <StyledButton onClick={heandlerDeleteBook}>Delete to library</StyledButton> 
        } */}
      </ModalWrapper>
    </StyledModal>
  );
};

export default Modal;
