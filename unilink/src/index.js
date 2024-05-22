import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let svg = `<svg width="50" height="50" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_201_1363)"><path d="M50.0599 25C50.0599 38.8071 38.8671 50 25.0599 50C11.2528 50 0.0599365 38.8071 0.0599365 25C0.0599365 11.1929 11.2528 0 25.0599 0C38.8671 0 50.0599 11.1929 50.0599 25Z" fill="url(#paint0_linear_201_1363)"/><path d="M50.0599 25C50.0599 38.8071 38.8671 50 25.0599 50C11.2528 50 0.0599365 38.8071 0.0599365 25C0.0599365 11.1929 11.2528 0 25.0599 0C38.8671 0 50.0599 11.1929 50.0599 25Z" fill="url(#paint1_linear_201_1363)"/><path d="M21.0599 32.5V49.5C21.0599 49.7761 21.2838 50 21.5599 50H28.5599C28.8361 50 29.0599 49.7761 29.0599 49.5V32.5C29.0599 32.2239 29.2838 32 29.5599 32H34.5599C34.8361 32 35.0599 31.7761 35.0599 31.5V25.5C35.0599 25.2239 34.8361 25 34.5599 25H29.5599C29.2838 25 29.0599 24.7765 29.0599 24.5003V20C29.0599 18 31.5599 17 32.5599 17H35.5599C35.8361 17 36.0599 16.7761 36.0599 16.5V10.5C36.0599 10.2239 35.8362 10 35.56 10H29.0599C24.2599 10 21.0599 15 21.0599 18V24.5C21.0599 24.7761 20.8361 25 20.5599 25H15.5599C15.2838 25 15.0599 25.2239 15.0599 25.5V31.5C15.0599 31.7761 15.2838 32 15.5599 32H20.5599C20.8361 32 21.0599 32.2239 21.0599 32.5Z" fill="black"/></g><defs><linearGradient id="paint0_linear_201_1363" x1="25.0599" y1="0" x2="25.0599" y2="50" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white"/></linearGradient><linearGradient id="paint1_linear_201_1363" x1="25.0599" y1="0" x2="25.0599" y2="50" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white"/></linearGradient><clipPath id="clip0_201_1363"><rect width="52.765" height="52.765" fill="white" transform="translate(0.0599365)"/></clipPath></defs></svg>`;
// let elements = document.querySelectorAll(".svg-facebook-light");
// elements.forEach((element) => {
//   element.innerHTML = svg;
// });