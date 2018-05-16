import React from 'react';

export default class  UserInput extends React.Component {

    constructor(props) {
        super(props)
    }

    processForm(event) {
        event.preventDefault();
        this.props.callback(this.input.value);
    }

    render() {

        const divStyle = {
            border: '1px solid black',
        };
    
    
        return (
            <form onSubmit={(e) =>  this.processForm(e)}>
                <label>Enter Value
                    <input style={divStyle} type="text" ref={value => this.input = value}/>
                </label>
                <input type="submit" value="ADD" />
            </form>
        )
    }

}