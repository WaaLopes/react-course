import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    sum(delta) {
        this.setState({
            value: this.state.value + delta
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h1>{this.state.value}</h1>
                <button onClick={() => this.sum(-2)}>Diminuir 2</button>
                <button onClick={() => this.sum(2)}>Aumentar 2</button>
                <button onClick={() => this.sum(4)}>Aumentar 4</button>
            </div>
        );
    }
}

export default ClassComponent;
