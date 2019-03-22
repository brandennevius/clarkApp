import React, { Component } from 'react';
import { Container,
  Header,
  Left, 
  Right,
  Content, 
  Form, 
  Item, 
  Input, 
  Label, 
  Button, 
  Text, 
  Body, 
  Title,  } from 'native-base';

import { StyleSheet, Alert} from 'react-native';
import MenuButton from "../Home/MenuButton";
import Footer1 from '../Footer/Footer1';

/*
This is a sample login page using code from native base
*/
export default class LoginComponent extends Component {

  /*
  used this code for example submit button
  */
  _onPressButton() {
    Alert.alert('Logged In')
    }

  render() {
    return (
      <Container>
        <Header style = {styles.header}>
            <Left>
                <MenuButton navigation = {this.props.navigation}/>
            </Left>
            <Body>
                <Title>Clark App</Title>
            </Body>
            <Right />
        </Header> 
        <Content>
          <Form>
            <Item stackedLabel>
              <Label style = {styles.text}>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label style = {styles.text}>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button onPress={this._onPressButton}>
            <Text style = {styles.text}>Submit</Text>
          </Button>
        </Content>
        <Footer1/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'GillSans',
    
  },
  header: {
    height: 100,
    backgroundColor: '#dd2a2a',
  },
  // Footer:{
  //   backgroundColor: '#dd2a2a',
  //   height: 20,
  // }
});

