import SearchResultItem from './SearchResultItem';
import styles from './SearchPage.module.scss';

const SearchResultList = ({
  results,
  searchValue,
  expandedId,
  setExpandedId,
}) => {
  const filtered = results.filter((r) => {
    // searchValue가 있으면 필터링, 없으면 모든 결과 표시
    return searchValue
      ? r.tag.some((tag) =>
          tag.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : true;
  });

  return (
    <div className={styles.results}>
      {filtered.length === 0 ? (
        <p className={styles.noResults}>검색 결과가 없습니다.</p>
      ) : (
        filtered.map((result) => (
          <SearchResultItem
            key={result.id}
            result={result}
            expanded={expandedId === result.id}
            toggle={() =>
              setExpandedId(expandedId === result.id ? null : result.id)
            }
          />
        ))
      )}
    </div>
  );
};

export default SearchResultList;
