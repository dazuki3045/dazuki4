import "./style.css"
import { Card } from "./card.jsx";
import { One } from "./one.jsx";

function App() {
  return (
      <div className="wrapper">
          <One />
          <div className="main">
              <Card /><Card /><Card /><Card /><Card />
              <Card /><Card /><Card /><Card /><Card />
          </div>
      </div>
  )
}

export default App
