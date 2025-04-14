import SearchResultItem from './SearchResultItem';
import styles from './SearchPage.module.scss';

const SearchResultList = ({
  results,
  searchValue,
  expandedId,
  setExpandedId,
}) => {
  const filtered = results.filter((r) =>
    r.tag.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.results}>
      {filtered.map((result) => (
        <SearchResultItem
          key={result.id}
          result={result}
          expanded={expandedId === result.id}
          toggle={() =>
            setExpandedId(expandedId === result.id ? null : result.id)
          }
        />
      ))}
    </div>
  );
};

export default SearchResultList;
