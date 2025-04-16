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
        <svg
          className={styles.searchIcon}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            fill-rule='evenodd'
            d='M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z'
            clip-rule='evenodd'
          />
        </svg>
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
          style={{
            paddingLeft: '15px', // 돋보기 아이콘과 입력 커서 간의 거리
          }}
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
