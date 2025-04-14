import styles from './SearchPage.module.scss';

const SearchInput = ({ inputValue, setInputValue, onKeyDown }) => (
  <input
    type='text'
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={onKeyDown}
    className={styles.input}
  />
);

export default SearchInput;
