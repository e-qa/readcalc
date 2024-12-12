import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="mx-auto max-w-4xl px-8 flex items-center justify-center h-[100dvh]">
        <App />
      </div>
    </Router>
  </StrictMode>
);
