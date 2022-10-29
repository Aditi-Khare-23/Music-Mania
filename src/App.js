
import './App.css';
import { LeftMenu } from "./components/leftMenu";
import { MainContents } from "./components/mainContents";
import { RightMenu } from "./components/rightMenu";
function App() {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <mainContents />
      <rightMenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
