import { Formik } from 'formik';
import { Searchbar, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import {AiOutlineSearch} from 'react-icons/ai'

export const Seachbar = ({value, onChange, onSubmit}) => {
    return <Searchbar>
        <Formik
            initialValues={{search: ''}}
        onSubmit={() => onSubmit(value)}
        >
        <SearchForm>
    <SearchFormButton type="submit">
        <AiOutlineSearch size={20} />
    </SearchFormButton>
        <SearchFormInput
      name="search"
      type="text"
      value={value}
      placeholder="Search images and photos"
      onChange={(evt) =>
          onChange(evt.target.value)}
      />
        </SearchForm>
        </Formik>
        </Searchbar>
}