import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// strict mode removed to render editor only once
// https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
