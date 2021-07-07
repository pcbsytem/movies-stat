import Routes from "./routes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Store from "./store/Store";
import "./App.css";

function App(props) {
  return (
    <Provider store={Store}>
      <main className="App">
        <Routes />
      </main>
      <ToastContainer />
    </Provider>
  );
}

export default App;
