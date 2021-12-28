import "./App.css";
import AppHeader from "./component/AppHeader";

import HomePage from "./component/HomePage";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <AppHeader />
      </div>
      <div className="background">
        <img
          className="image"
          src="https://firebasestorage.googleapis.com/v0/b/tryshiftt.appspot.com/o/media%2FZGeLjYMNg3fNTcV6SaDfRrtU9pP2%2F1598526294511_euphoria.kw_92951393_254814942359695_3818074115001305559_n.jpg?alt=media&token=cfa27b9b-0342-4714-9958-647f220845e1"
          alt="coke"
        ></img>
      </div>

      <div className="app">
        <Menu />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
