import Menu from "./Components/Menu"
import Home from "./Components/Home"
import Section from "./Components/Section1"
import Section2 from "./Components/Section2"
import Missao from "./Components/Missao_feedback"
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Section />
      <Section2 />
      <Missao />
    </div>
  );
}

export default App;
