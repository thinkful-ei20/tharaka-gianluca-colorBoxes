import React, { Component } from 'react';
import UserInput from './components/user-input';
import BoxList from './components/box-list';

class ColorBox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			components: []
		};
	}

	setComponents(input) {
		this.setState(
			{components: [...this.state.components, input]}
		);
	}

	render() {

		return (
			<div className="App">
				<UserInput callback={val => this.setComponents(val)}/>
				<BoxList boxlist={this.state.components}/>
			</div>
		);
	}
}

export default ColorBox;
