import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './Header';
import TasksList from './TasksList';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Header/>
      <TasksList />
  
  </>
  
);

