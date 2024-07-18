import { useAddTodo } from "../../hooks/useAddTodo";

export const AddTodosForm = ({ setRefresh, refresh }) => {
  const { handleAddTodo, setTodoValue, todoValue } = useAddTodo({
    setRefresh,
    refresh,
  });

  return (
    <>
      <input
        type="text"
        className="input-text"
        placeholder="Добавить задачу"
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <button className="button" onClick={handleAddTodo}>
        Добавить
      </button>
    </>
  );
};
