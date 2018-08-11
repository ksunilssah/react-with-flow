// @flow
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <h1>Flow example</h1>
        <Header title={'Header title'} arr={[1, 4, 5, 3, 78, 9]} />
        <Footer desc={'footer copyright text'} />
      </div>
    );
  }
}

export default App;
