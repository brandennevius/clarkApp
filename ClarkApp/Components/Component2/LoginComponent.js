import React, { Component } from 'react';
import { Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label, 
  Button, 
  Text, 
  Body, 
  Title, 
  Footer, 
  FooterTab} from 'native-base';
import { StyleSheet, Alert} from 'react-native';

/*
This is a sample login page using code from native base
*/

export default class LoginComponent extends Component {

  /*
  used this code for example submit button
  */
  _onPressButton() {
    Alert.alert('You tapped the button!')
    
    }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Clark App</Title>
          </Body>
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
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Clark University - Worcester Mass</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'GillSans',
    
  },
});
