import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
//экспорт не по дефолту
import {App} from './views/App'
import './views/styles/reset.scss'
import './views/styles/common.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
 )
