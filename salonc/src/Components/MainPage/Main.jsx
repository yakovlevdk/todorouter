import { useEffect, useState } from "react";
import "./mainpage.styles.css";
import { AddTodosForm } from "./addTodosForm";
import { TodoItem } from "../TodoList";
import { SearchForm } from "./searchForm";
import { useSortTodo } from "../../hooks/useSortTodo";
export const Main = ({ todosList, setTodosList, refresh, setRefresh }) => {
  const [foundedValues, setFoundedValues] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((todos) => todos.json())
      .then((todo) => {
        setTodosList(todo);
      });
    console.log(foundedValues);
  }, [refresh]);

  const { handleSortTodo } = useSortTodo({
    todosList,
    setTodosList,
  });
  return (
    <>
      <div className="main-container">
        <div className="head">
          <h1>Задачи</h1>
        </div>
        <div className="main-page-main">
          <div className="add-todo">
            <AddTodosForm refresh={refresh} setRefresh={setRefresh} />
          </div>
          <div className="search-todo">
            <SearchForm
              refresh={refresh}
              setRefresh={setRefresh}
              todosList={todosList}
              foundedValues={foundedValues}
              setFoundedValues={setFoundedValues}
            />
          </div>
          <div className="sort-todo">
            <button className="button" onClick={handleSortTodo}>
              Сортировать
            </button>
          </div>
          <div className="todos">
            {foundedValues && (
              <div className="founded-todos">
                <h2>Найденные задачи</h2>
                {foundedValues.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    todo={todo}
                  />
                ))}
              </div>
            )}
            <h2>Все задачи</h2>
            {todosList &&
              todosList.map((todo) => (
                <TodoItem
                  key={todo.id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  todo={todo}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
