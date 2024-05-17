import Form from "./Components/Form";
import L from "./Components/L";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <L />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
