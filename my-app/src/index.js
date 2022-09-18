import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/app.css'

import ContentWrapper from './components/ContentWrapper';
import SideBar from './components/SideBar';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div id='wrapper'>
    <SideBar />
    <ContentWrapper />

    </div>
    
  </>
);
