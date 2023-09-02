import React, { useState } from 'react';
import ChildComp from './ChildComp'

function ParentComp(props) {

    const [count, setCount] = useState(0);

    function changeCount(shouldIncrement) {
        shouldIncrement ? setCount(count + 1) : setCount(count - 1);
    }

    return (
        <div className='parentEl'>
            <h1>Parent Functional Comp</h1>
            <h1>Count {count}</h1>
            <button onClick={() => changeCount(true)}>Increment</button>
            <button onClick={() => changeCount(false)}>Decrement</button>
            <ChildComp />
        </div>
    );
}

export default ParentComp;