import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css';
import { FormDataProvider } from './context/formDataContext';
import { FormListProvider } from './context/formListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormListProvider>
    <FormDataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FormDataProvider>
  </FormListProvider>
);
