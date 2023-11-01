import "./App.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
      <input
        type = "text"
        onChange={(e) => {
          console.log(e.target.value)
          setRole(e.target.value);
        }}
      />
      <Employee name="A" role="SDE-1" />
      <Employee name="B" role={role} />
    </div>
  );
}

export default App;
