import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import CertificateStore from './store/certificate-store'
import { store } from './reducers/index';

export const Context = createContext(null)

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider value={{
      certificate: new CertificateStore()
    }}>
    <App />
  </Context.Provider>
  </Provider>,
  document.getElementById('root')
);


