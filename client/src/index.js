import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CertificateStore from './store/certificate-store'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    certificate: new CertificateStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


