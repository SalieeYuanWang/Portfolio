import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your global styles
import App from './App';  // Import your App component
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import reportWebVitals from './reportWebVitals';  // Web vitals for performance monitoring

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
