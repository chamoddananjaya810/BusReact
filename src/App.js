import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <button className="user-button" onClick={() => navigate("/users")}>
            Users
          </button>
        </h1>
      </header>
    </div>
  );
}

export default App;
