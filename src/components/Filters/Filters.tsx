import { FC } from 'react';
import { Form, FormTitle, FiltersButton } from './Filters.styled';
import StyledInput from '../StyledInput';

const Filters: FC = () => {
  return (
    <Form action="">
      <FormTitle>Filters:</FormTitle>
      <StyledInput disableUnderline fullWidth placeholder="Book title" />
      <StyledInput disableUnderline fullWidth placeholder="The author:" />
      <FiltersButton type="submit" variant="text">
        To apply
      </FiltersButton>
    </Form>
  );
};

export default Filters;
