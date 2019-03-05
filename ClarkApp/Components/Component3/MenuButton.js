import React from 'react'
import { Ionicons } from '@expo/vector-icons'

/*
This is the menu button that is used for the drawer 
It is used in the same video for the drawerNavigator 
*/
export default class MenuButton extends React.Component {
  render() {
    return (
      <Ionicons
        name = 'md-menu'
        color = 'black'
        size = {32}
        onPress = {() => this.props.navigation.toggleDrawer()}
        />
    );
  }
}

