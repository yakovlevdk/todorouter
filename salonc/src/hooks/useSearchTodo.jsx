import { useState } from "react";
import { debounce } from "lodash-es";
export const useSearchTodo = ({
  refresh,
  setRefresh,
  todosList,
  setFoundedValues,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    debounce(() => {
      if (searchValue) {
        const foundedItems = todosList.filter((todo) =>
          todo.title.includes(searchValue)
        );
        if (foundedItems) {
          setRefresh(!refresh);

          setFoundedValues(foundedItems);
          setSearchValue("");
        }
      }
    }, 300)();
  };

  return { searchValue, setSearchValue, handleSearch };
};
