import React from 'react';
import HomepageComponent from './Components/Component1/HomepageComponent';
import LoginComponent from './Components/Component2/LoginComponent';

/*
To toggle between viewing the homepage and login 
just remove the comments and comment out the other
component
*/

export default class App extends React.Component {

  render() {

    return (
      //<LoginComponent/>
      <HomepageComponent/>
    );
  }
}