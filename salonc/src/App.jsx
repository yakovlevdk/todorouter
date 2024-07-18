import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Main } from "./Components/MainPage/Main";
import { Task } from "./Components/TaskPage/Task";
import { useState } from "react";
import { NotFound } from "./Components/NotFound";
import "./App.css";
const App = () => {
  const [todosList, setTodosList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div className="app">
        <div className="header-container">
          <header className="header">
            <div className="logo">
              <h2>TodoList</h2>
            </div>
            <nav className="header-nav">
              <ul className="nav">
                <li>
                  {" "}
                  <Link to="/">Главная </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                todosList={todosList}
                setTodosList={setTodosList}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/task/:id"
            element={
              <Task
                todosList={todosList}
                setTodosList={setTodosList}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <div className="footer-container">
          <footer>
            <div className="footer-text">
              <p> Copyright © 2024. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
