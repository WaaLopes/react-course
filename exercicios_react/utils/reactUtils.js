import React from 'react';

function childrenWithProps(children, props) {
    console.log(props);
    return React.Children.map(props.children, child => React.cloneElement(
        child, { ...props
        }));
}

export {
    childrenWithProps
};