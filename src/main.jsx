import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/main.scss'
import App from './router/App.jsx'; 
import "./I18.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)