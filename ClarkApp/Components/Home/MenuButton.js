import React from 'react'
import { Ionicons } from '@expo/vector-icons'
//import {Ionicons} from 'react-native-vector-icons/Ionicons';

/*
This is the menu button that is used for the drawer 
It is used in the same video for the drawerNavigator 
*/
export default class MenuButton extends React.Component {
  render() {
    return (
      <Ionicons style={{ position: 'absolute', top: 40, left: 40, zIndex: 5 }}
        name = 'md-menu'
        color = 'white'
        size = {32}
        onPress = {() => this.props.navigation.toggleDrawer()}
        
        />
    );
  }
}

