import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Header,
  Title
} from "native-base";

//sample routes for the sidebar 
const routes = ["Home", "Chat", "Profile"];

/*
This code is for the drawer that is used on the homepage
the code was taken from https://github.com/GeekyAnts/native-base-react-navigation-stack-navigator/blob/master/src/SideBar/SideBar.js
Inside the HomepageComponent the <Drawer></Drawer> tags are wrapped around every other tag within 
the component
*/


export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header>
            <Title>Menu</Title>
        </Header>
        <Content>
          <Image
            source={require('./jcBuilding.png')}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={require('./clarkLogo.png')}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}