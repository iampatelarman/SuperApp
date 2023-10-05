import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Category from "./pages/category/Category";
import HomePage from "./pages/homePage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
