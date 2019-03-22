import React, {Component} from 'React';
import { StyleSheet, Alert} from 'react-native';
import {Header, Left, Body, Title, Right} from 'native-base';
import MenuButton from "../Component3/MenuButton";

export default class Header1 extends Component{
    render(){
        return(
            <Header style = {styles.header}>
                <Left>
                    <MenuButton navigation = {this.props.navigation}/>
                </Left>
                <Body>
                    <Title>Clark App</Title>
                </Body>
                <Right />
            </Header> 
        );
    }
}

const styles = StyleSheet.create({
    header:{
        height: 100,
        backgroundColor: '#dd2a2a',
    }
})