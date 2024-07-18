import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="not-found">
        <h2>Несуществующая страница</h2>
        <button className="button" onClick={() => navigate("/")}>
          На главную
        </button>{" "}
      </div>
    </>
  );
};
