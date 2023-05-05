import { Route, BrowserRouter } from "react-router-dom";

import Menu from "./Components/Menu"
import Home from "./Components/Home"
import Section from "./Components/Section1"
import Section2 from "./Components/Section2"
import Missao from "./Components/Mvv"
import Footer from "./Components/Feedback"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Home />
        <Section />
        <Section2 />
        <Missao />
        <Footer />
      <BrowserRouter>
    </div>
  );
}

export default App;
