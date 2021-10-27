import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import AppRoutes from './component/AppRoutes'


function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <AppRoutes />
        </div>
      </Provider>
    </BrowserRouter>

  );
}


export default App;
