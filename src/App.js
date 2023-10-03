import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Category from "./pages/category/Category";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
