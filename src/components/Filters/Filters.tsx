import { FC } from 'react';
import { Form, FormTitle, FiltersButton } from './Filters.styled';
import StyledInput from '../StyledInput';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';

const Filters: FC = () => {
  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)
    const inputTitleValue: any = formData.get("title");
    const inputAuthorValue: any = formData.get("author")
    
    dispatch(setFilter({inputTitleValue, inputAuthorValue}))
  }

  return (
    <Form onSubmit={submitHandler} action="">
      <FormTitle>Filters:</FormTitle>
      <StyledInput disableUnderline fullWidth placeholder="Book title" name="title" />
      <StyledInput disableUnderline fullWidth placeholder="The author:" name="author"/>
      <FiltersButton type="submit" variant="text">
        To apply
      </FiltersButton>
    </Form>
  );
};

export default Filters;
