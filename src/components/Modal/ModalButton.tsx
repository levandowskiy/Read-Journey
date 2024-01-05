import { FC } from 'react';
import StyledButton from '../../UI/StyledButton';
// import {  } from './ModalButton.styled';

interface IModalButtonProps {
  heandlerClick?: () => void;
  buttonText: string;
}

const ModalButton: FC<IModalButtonProps> = ({heandlerClick, buttonText}) => {
  return (
    <>
      <StyledButton onClick={heandlerClick}>{buttonText}</StyledButton>
    </>
  );
};

export default ModalButton;