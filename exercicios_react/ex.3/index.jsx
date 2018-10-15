import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './Component';

ReactDOM.render(
    <div>
        <Primeiro name="Wagner" />
        <Segundo hi="Doidera" />
    </div>,
    document.getElementById('app')
);