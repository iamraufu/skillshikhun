import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import IndexSEO from './components/SEO/IndexSEO';

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <App>
        <IndexSEO />
      </App>
    </HelmetProvider>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root')
);
