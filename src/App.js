import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./utils/store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
