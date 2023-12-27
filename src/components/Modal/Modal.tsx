import { FC } from 'react';
import {
  ModalWrapper,
  StyledModal,
  CloseIcon,
} from './Modal.styled';
import BookCard from '../BookCard';
import { IBook } from '../../types/data';

interface ModalProps {
  curentBook: IBook | null;
  open: boolean;
  handleClose: () => void
}

const Modal: FC<ModalProps> = ({ curentBook, handleClose, open }) => {

  return (
    curentBook && 
    <StyledModal open={open} onClose={handleClose}>
      <ModalWrapper>
        <CloseIcon onClick={handleClose} />
        {curentBook && (          
          <div>
            <BookCard id={curentBook.id}  imageUrl={curentBook.imageUrl} author={curentBook.author} title={curentBook.title} />
          </div>
        )}
      </ModalWrapper>
    </StyledModal>
  );
};

export default Modal;
