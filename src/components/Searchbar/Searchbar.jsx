import { Formik } from 'formik';
import { SearchbarField, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({onSubmit}) => {
    return <SearchbarField>
        <Formik
            initialValues={{search: ''}}
        onSubmit={(evt) => onSubmit(evt.search)}
        >
        <SearchForm>
    <SearchFormButton type="submit">
        <AiOutlineSearch size={20} />
    </SearchFormButton>
         <SearchFormInput
      name="search"
      type="text"
      placeholder="Search images and photos"
      />
        </SearchForm>
        </Formik>
        </SearchbarField>
}