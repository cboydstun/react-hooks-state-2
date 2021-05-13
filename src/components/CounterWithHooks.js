import React from 'react';

function CounterWithHooks() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>This is a counter using hooks</h2>
            <h1>Current State: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click to Increment Integer State</button>
        </div>
    );
}

export default CounterWithHooks;