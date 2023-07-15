import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Gamehome from "./components/Gamehome";
import Grade from "./components/Grade";

function App() {
  return (
    <div id="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/gamehome" element={<Gamehome />} />
          <Route path="/grade" element={<Grade />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
