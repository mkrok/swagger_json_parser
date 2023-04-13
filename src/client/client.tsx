import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

// let container = null;

// document.addEventListener('DOMContentLoaded', () => {
//   if (!container) {
//     container = document.getElementById('app');
//     const root = ReactDOMClient.createRoot(container);
//     root.render(<App />);
//   }
// });
const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
