import { useState } from "react";

export const useSortTodo = ({ todosList, setTodosList }) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleSortTodo = (event) => {
    event.preventDefault();
    console.log("Сортировка началась");

    const sortedTodos = [...todosList].sort((a, b) => {
      if (isAscending) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    setTodosList(sortedTodos);
    setIsAscending(!isAscending);
  };

  return { handleSortTodo };
};
