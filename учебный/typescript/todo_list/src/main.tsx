import React from 'react'
import ReactDOM from 'react-dom/client';
//экспорт не по дефолту
import {App} from './views/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
