import React from 'react';
import DrawerNavigator from '../ClarkApp/Components/Drawer/DrawerNavigator';
import firebase from 'react-native-firebase';


export default class App extends React.Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}