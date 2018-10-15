import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family>
        <Member name="Wagner" lastName="Lopes" />
        <Member name="Letícia" lastName="Lopes" />
        <Member name="Renata" lastName="Lopes" />
    </Family>,
    document.getElementById('app')
);