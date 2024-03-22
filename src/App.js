import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import "./App.css";
import About from "./components/About";
import Openinghours from "./components/Openinghours";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="openinghours" element={<Openinghours />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
