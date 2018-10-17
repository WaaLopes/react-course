import React from 'react';
import ReactDOM from 'react-dom';
import Field from './field';

ReactDOM.render(
    <Field
        label="Componente controlado"
        initialValue="Placeholder"
    />,
    document.getElementById('app')
);