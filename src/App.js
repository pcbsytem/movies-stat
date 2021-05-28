import Routes from "./routes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer/Footer";
import Store from "./store/Store";
import "./App.css";

function App(props) {
  return (
    <Provider store={Store}>
      <div className="App">
        <Routes />
      </div>
      <Footer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
