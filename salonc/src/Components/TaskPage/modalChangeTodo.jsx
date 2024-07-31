import Modal from "react-modal";
import { useChangeTodo } from "../../hooks/useChangeTodo";
import "../MainPage/mainpage.styles.css";

Modal.setAppElement("#root");

export const ModalChangeTodo = ({
  isOpen,
  todo,
  setRefresh,
  refresh,
  setIsOpen,
}) => {
  const { changeTodo, newValue, setNewValue, cancelChange } = useChangeTodo({
    todo,
    setRefresh,
    refresh,
    setIsOpen,
  });

  const handleInputChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} className="modal">
      <input
        type="text"
        placeholder="Введите новую задачу"
        value={newValue}
        className="input-text"
        onChange={handleInputChange}
      />
      <button className="button" onClick={changeTodo}>
        Изменить
      </button>
      <button className="button" onClick={cancelChange}>
        Закрыть
      </button>
    </Modal>
  );
};
