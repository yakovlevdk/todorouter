import { useState } from "react";
export const useChangeTodo = ({ todo, setRefresh, refresh, setIsOpen }) => {
  const [newValue, setNewValue] = useState("");

  const cancelChange = () => {
    setIsOpen(false);
  };

  const changeTodo = () => {
    if (newValue) {
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          title: newValue,
        }),
      })
        .then(() => {
          setRefresh(!refresh);
        })
        .then(() => {
          setIsOpen(false);
        });
    }
  };
  return { changeTodo, newValue, setNewValue, cancelChange };
};
