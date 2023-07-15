
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {persistor, store} from '././redux/store.js';
import {Provider} from "react-redux";



import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
                         <App />
                  </BrowserRouter>
        </PersistGate>
    </Provider>
    ,
)