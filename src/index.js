import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dataContent from './assets/dataJson/article'

ReactDOM.render(
    <React.StrictMode>
            <App dataContent={dataContent}/>
    </React.StrictMode>,
    document.getElementById('root')
);





