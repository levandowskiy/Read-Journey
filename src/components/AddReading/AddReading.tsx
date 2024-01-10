import { FC } from 'react';
import { } from './AddReading.styled';
import StyledInput from '../../UI/StyledInput';
import StyledButton from '../../UI/StyledButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { readingBookThunk } from '../../redux/booksSlice';



const AddReading: FC = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: any) => state.modal.currentBook._id)
  const isReading = useSelector((state: any) => state.books.isReading)

  const handlerSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)
    const page: any = formData.get("page");

    dispatch(readingBookThunk({ id, page, isReading }))
    form.reset();
  }

  return (
    <form action="" onSubmit={handlerSubmit}>
      <legend>Start page:</legend>
      <StyledInput
        disableUnderline
        fullWidth
        placeholder="Page number"
        name="page"
      // pattern="[0-9]+"
      />
      {
        isReading ?
          <StyledButton type='submit'>To stop</StyledButton>
          :
          <StyledButton type='submit'>To start</StyledButton>
      }

    </form>
  );
};

export default AddReading;