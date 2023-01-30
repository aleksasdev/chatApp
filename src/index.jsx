import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DefaultProvider } from '@/contexts/DefaultProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>

      <BrowserRouter>

         <DefaultProvider>
            <App />
         </DefaultProvider>
         
      </BrowserRouter>

   </React.StrictMode>
);