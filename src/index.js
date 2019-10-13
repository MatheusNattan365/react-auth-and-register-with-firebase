import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';

// importa as configs do firebase
import './firebaseConfig'

ReactDOM.render(<Routes />, document.getElementById('root'));
