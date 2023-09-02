import React, { Component } from 'react';

class childComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

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