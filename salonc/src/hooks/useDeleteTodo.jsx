import { useNavigate } from "react-router-dom";

export const useDeleteTodo = ({ refresh, setRefresh, todo }) => {
  const navigate = useNavigate();
  const handleDeleteTodo = () => {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    }).then(() => {
      setRefresh(!refresh);

      navigate("/");
    });
  };

  return { handleDeleteTodo };
};
