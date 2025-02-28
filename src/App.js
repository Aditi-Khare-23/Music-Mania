import "./App.css";
import { LeftMenu } from "./components/leftMenu";
import { MainContainer } from "./components/MainContainer";
import { RightMenu } from "./components/RightMenu";
var App = () => {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className="background"></div>
    </div>
  );
};

export default App;
