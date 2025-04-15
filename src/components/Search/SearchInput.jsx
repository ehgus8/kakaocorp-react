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
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
          className={styles.searchIcon}
          style={{
            position: 'absolute',
            left: '15px', // 위치 조정 (왼쪽에 배치)
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <path d='M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414L14 14l1-1-4.242-4.242zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
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
