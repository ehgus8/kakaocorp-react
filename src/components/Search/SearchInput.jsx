import styles from './SearchInput.module.scss';

const SearchInput = ({
  inputValue,
  setInputValue,
  // setSearchValue,
  submitHandler,
  onKeyDown,
  onClose,
}) => (
  <div className={styles.searchContainer}>
    <div className={styles.chatBubble}>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='무엇이 궁금하신가요?'
          value={inputValue}
          onChange={(e) => {
            // setSearchValue(e.target.value);
            setInputValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
          className={styles.searchInput}
        />
      </form>
    </div>
    <img
      src='/img/searchIcon.png'
      className={styles.characterImage}
      alt='검색 아이콘'
    />
  </div>
);

export default SearchInput;
