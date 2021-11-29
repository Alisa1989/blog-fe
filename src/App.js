import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    hellp: null,
  };

  componentDidMount() {
    axios.get('/hello')
      .then(res=> this.setState({hello: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return( 
    <div>
      {this.state.hello ? <div> {this.state.hello} </div> : null}
    </div>
    );
  }
}

export default App;
