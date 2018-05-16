import React, { Component } from 'react';
import UserInput from './components/user-input';
import BoxList from './components/box-list';

const MIN = 0;
const MAX = 100000;

class ColorBox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			colorLookUp: {}
		};
	}

	// MDN JavaScript Specs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

	generateRandIntInclusive() {
		return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //The maximum is inclusive and the minimum is inclusive
	}

	setComponents(str) {
		console.log('In ColorBox',str);
		if(!this.state.colorLookUp[str]) {
			const color = this.generateRandIntInclusive();
			console.log(this.state.colorLookUp);
			const lookUp = {...this.state.colorLookUp};
			lookUp[str] = color;
			this.setState({
				colorLookUp: {...lookUp}
			});
		}
	}

	render() {

		return (
			<div className="App">
				<UserInput callback={str => this.setComponents(str)}/>
				<BoxList lookUp={this.state.colorLookUp}/>
			</div>
		);
	}
}

export default ColorBox;
