import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthIndex from "./components/auth/AuthIndex";
import Menu from "./components/layouts/Menu";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/auth/*" element={<AuthIndex />} />
      </Routes>
    </>
  );
}

export default App;
