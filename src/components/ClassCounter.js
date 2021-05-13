// import necessary libraries - notice the green names glowing below
import React, { Component } from 'react';

//setup class based component
class Counter extends Component {
	//establish state
	state = {
		count: 0,
	};

	//function to modify state
	setCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	//function to render output to user
	render() {
		return (
			<div>
				{/* display initial state and state changes */}
				<h2>This is a counter using a class</h2>
				<h1>{this.state.count}</h1>
				{/* button that calls function to increment count */}
				<button onClick={this.setCount}>Click to Increment</button>
			</div>
		);
	}
}

export default Counter;