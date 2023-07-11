
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {store} from '././redux/store.js';
import {Provider} from "react-redux";



import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
          <BrowserRouter>
                         <App />
                  </BrowserRouter>
    </Provider>
    ,
)