import { ToastContainer } from 'react-toastify'
import { MainRoutes } from './router'
import { Provider } from 'react-redux'
import store from './store/Store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <MainRoutes />
      </main>
      <ToastContainer />
    </Provider>
  )
}

export default App
