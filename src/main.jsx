import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//redux
import store from './store'
import { Provider } from 'react-redux'
//react-router-dom
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
