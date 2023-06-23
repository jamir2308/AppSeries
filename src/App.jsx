import React from 'react';
import ReactDOM from "react-dom/client";
import AppRouter from './router/AppRouter';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'




ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
);