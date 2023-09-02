import React, { Component } from 'react';

class childComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', 'nextProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', 'nextProps', nextProps, 'nextState:', nextState);
        return nextState.count < 10 ? true : false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', 'nextProps', nextProps, 'nextState', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', 'prevProps', prevProps, 'prevState', prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount(shouldIncrement) {
        shouldIncrement ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h2>Child Class Comp</h2>
                <h2>Count {this.state.count}</h2>
                <button onClick={() => this.changeCount(true)}>Increment</button>
                <button onClick={() => this.changeCount(false)}>Decrement</button>
            </div>
        );
    }
}

childComp.propTypes = {

};

export default childComp;