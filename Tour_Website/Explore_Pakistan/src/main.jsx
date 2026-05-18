// ============================================================
// FILE: src/main.jsx
// PURPOSE: Entry point - wraps app with Redux Provider + Router
// ============================================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'         // Redux: supplies store to all components
import { store } from './app/store'             // Our configured Redux store
import { BrowserRouter } from 'react-router-dom' // Router: enables URL-based navigation
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      Provider: Makes Redux store available to every component below it.
      Without this, useSelector / useDispatch won't work anywhere.
    */}
    <Provider store={store}>
      {/*
        BrowserRouter: Enables React Router's navigation system.
        It listens to the URL and renders matching components.
      */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
