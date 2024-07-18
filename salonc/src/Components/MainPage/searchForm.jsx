import { useSearchTodo } from "../../hooks/useSearchTodo";

export const SearchForm = ({
  refresh,
  setRefresh,
  todosList,
  foundedValues,
  setFoundedValues,
}) => {
  const { searchValue, setSearchValue, handleSearch } = useSearchTodo({
    refresh,
    setRefresh,
    todosList,
    foundedValues,
    setFoundedValues,
  });
  return (
    <>
      <input
        type="text"
        className="input-text"
        placeholder="Поиск"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="button" onClick={handleSearch}>
        Искать
      </button>
    </>
  );
};
