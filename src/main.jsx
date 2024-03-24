import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <div className="grid grid-cols-[64px_minmax(240px,1fr)_64px]">
  <div className="relative">
    <App />
  </div>
  ,
)
