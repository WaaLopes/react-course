import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
    <div>
        <h2>Família {props.lastName}:</h2>
        {childrenWithProps(props.children, props)}
    </div>
);