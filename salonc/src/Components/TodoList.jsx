import { Link } from "react-router-dom";

export const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="todo-item" key={todo["id"]}>
        <div className="left-section">
          <input type="checkbox" name="todo-checkbox" className="todo-check" />
          <label htmlFor="todo-checkbox">
            <Link to={`task/${todo.id}`} className="link">
              {" "}
              {todo["title"].length > 30
                ? `${todo["title"].slice(0, 30)}...`
                : todo["title"]}
            </Link>
          </label>
        </div>
      </div>
    </>
  );
};
