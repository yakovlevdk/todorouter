import { useState } from "react";

export const useAddTodo = ({ setRefresh, refresh }) => {
  const [todoValue, setTodoValue] = useState("");
  const handleAddTodo = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let data = `${dd}/${mm}/${yyyy}`;

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: todoValue,
        date: data,
      }),
    }).then(() => {
      setRefresh(!refresh);
      setTodoValue("");
    });
  };

  return { handleAddTodo, setTodoValue, todoValue };
};
