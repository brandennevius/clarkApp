import React, { Component } from 'react';
import { Container, 
  Drawer, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text, 
  Accordion,
 } 
  from 'native-base';
import {StyleSheet, Alert, Dimensions} from 'react-native';
import MenuButton from "../Component3/MenuButton";

/*
This code is for the accordian component provided by native base
*/
  const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];


/*
This is the code for calculating and formatting the current date
*/
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;


export default class HomepageComponent extends Component {

  /*
  constructor used to access the date variable 
  using this.state.date
  */
  constructor(props) {
    super(props);
    this.state = {
      date: today,
    };
  }

  render() {
    return (
      <Container style = {{flex: 1}}>
        <Header style= {styles.header}>
          <Left>
            <MenuButton navigation = {this.props.navigation}/>
          </Left>
          <Body>
            <Title style={styles.Title}></Title>
            <Text style ={styles.Date}>{this.state.date}</Text>
          </Body>
          <Right />
        </Header>
        <Content padder>
  
        </Content>
        <Footer style = {styles.footer}>
          <FooterTab >
            <Button full>
              <Text style = {styles.footerText}></Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#dd2a2a',
    height: HEIGHT/40,
    

    //fontFamily: 'GillSans',
    
  },
  footerText:{
    color: 'black',
    fontSize: 15,
  },
  Date: {
    textAlign: 'center',
  },
  Title: {
    textAlign: 'center',
    color: '#dd2a2a',
  },
  header: {
    height: 100,
    backgroundColor: '#dd2a2a',
  }

});