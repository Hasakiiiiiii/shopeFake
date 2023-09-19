import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Detail from "./path/Detail";
import Main from "./path/main";
import Add from "./path/Add";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/add" element={<Add />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

