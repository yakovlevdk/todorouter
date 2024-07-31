import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { useNavigate, useParams } from "react-router-dom";
import "./taskpage.styles.css";
import { useEffect, useState } from "react";
import { ModalChangeTodo } from "./modalChangeTodo";
import { useOpenModal } from "../../hooks/useOpenModal";

export const Task = ({ refresh, setRefresh }) => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((todos) => {
        if (!todos.ok) {
          throw new Error("Not found");
        }
        return todos.json();
      })
      .then((todo) => {
        setTodo(todo);
      })
      .catch(() => {
        navigate("/404");
      });
  }, [refresh]);

  const { handleDeleteTodo } = useDeleteTodo({
    refresh,
    setRefresh,
    todo,
    setTodo,
  });
  const { handleOpenModalWindow, isOpen, setIsOpen } = useOpenModal();

  return (
    <>
      {todo && (
        <div className="main-container">
          <div className="todos">
            <div className="todo-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  name="todo-checkbox"
                  className="todo-check"
                />
                <label htmlFor="todo-checkbox"> {todo.title}</label>
              </div>
              <div className="right-section">
                <label className="date">{todo.date}</label>
                <button className="button" onClick={handleOpenModalWindow}>
                  Изменить
                </button>
                {isOpen && (
                  <ModalChangeTodo
                    isOpen={isOpen}
                    todo={todo}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    setIsOpen={setIsOpen}
                  />
                )}
                <button className="button" onClick={handleDeleteTodo}>
                  Удалить
                </button>
                <button className="button" onClick={() => navigate(-1)}>
                  Назад
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
