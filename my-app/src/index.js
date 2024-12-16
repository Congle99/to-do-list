import React from 'react';  
import ReactDOM from 'react-dom/client'; // Cập nhật import từ 'react-dom' sang 'react-dom/client'  
import './index.css';  
import TaskList from './TaskList';  

// Tạo root  
const root = ReactDOM.createRoot(document.getElementById('root'));  

// Render ứng dụng  
root.render(  
  <React.StrictMode>  
    <TaskList />  
  </React.StrictMode>  
);  