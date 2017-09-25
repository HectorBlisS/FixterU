import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {NavBar} from './components';

class App extends Component {

    state = {
      visibleMenu:false
    };

    toggleVisibility = () => {
        this.setState({visibleMenu:!this.state.visibleMenu})
    };

  render() {
      const {visibleMenu} = this.state;
    return (
      <div style={visibleMenu?styles.hidden:null} className="App">
        <NavBar
            toggleVisibility={this.toggleVisibility}
            visibleMenu={visibleMenu}
        />
        <Routes/>
      </div>
    );
  }
}

const styles={
  hidden:{
      overflow:'hidden',
      position:'fixed'
  }
};

export default App;
