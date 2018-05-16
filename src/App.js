import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './components/user-input';

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      components: []
    }
  }

  setComponents(input) {
    this.setState(
      {components: [...this.state.components, input]}
    )
  }

  render() {

    return (
      <div className="App">
        <UserInput callback={val => this.setComponents(val)}/>
      </div>
    );
  }
}

export default App;
