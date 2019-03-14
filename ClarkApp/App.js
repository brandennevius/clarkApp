import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeScreen  from './components/HomeScreen/HomeScreen';
import ActivityScreen from './components/ActivityScreen/ActivityScreen';

export default class App extends Component {
  render() {
    return (
    <ActivityScreen/>
    )
  }
}

