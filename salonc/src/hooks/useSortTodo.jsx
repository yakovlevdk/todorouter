export const useSortTodo = ({ todosList, setTodosList }) => {
  const handleSortTodo = (event) => {
    event.preventDefault();
    console.log("Сортировка началась");
    const sortedTodos = [...todosList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    console.log("Отсортированные задачи:", sortedTodos);
    setTodosList(sortedTodos);
  };

  return { handleSortTodo };
};
