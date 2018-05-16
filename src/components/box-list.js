import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class BoxList extends React.Component {
	constructor(props) {
		super(props);
	}

	//from here: https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript

	hashCode(str) { // java String#hashCode
		var hash = 0;
		for (var i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return hash;
	}

	intToRGB(i){
		var c = (i & 0x00FFFFFF)
			.toString(16)
			.toUpperCase();
		return '00000'.substring(0, 6 - c.length) + c;
	}
	/****************************************************************/

	formatBoxes(list) {
		return list.map((item, index) => {
			return(<li key={index}>
				<img src={logo} className="App-logo" alt="logo" />
			</li>);
		});
	}

	render() {
		const formated = this.formatBoxes(this.props.boxlist);
		return(
			<ul>{formated}</ul>
		);
	}
}