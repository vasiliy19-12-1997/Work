import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.scss';
import './styles/reset.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
    <BrowserRouter>
    <ModalState>
    <App />
    </ModalState>
    </BrowserRouter>
);
// serviceWorker.unregister()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
