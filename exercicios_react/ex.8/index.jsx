import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent';

ReactDOM.render(
    <ClassComponent
        label="Meu contador"
        value={25}
    />,
    document.getElementById('app')
);