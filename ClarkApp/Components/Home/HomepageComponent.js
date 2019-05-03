import React, { Component } from 'react';
import {
  Container,
  Drawer,
  Header,
  Title,
  Content,
  
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Accordion,
  View,
  Card, 
  CardItem,
}
  from 'native-base';
import { StyleSheet, Alert, Dimensions, ActivityIndicator, StatusBar} from 'react-native';
import MenuButton from "../Home/MenuButton";






export default class HomepageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://140.232.172.92:5000/api/items', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          eventSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }


    return (
      
      <Container style={{ flex: 3 }}>
      <StatusBar hidden/>
        <Header style={styles.header}>
          <Left>
            <MenuButton navigation={this.props.navigation} />
          </Left>
          <Body style = {{ flex : 3}}>
            <Text style={styles.title}>Whats Happening</Text>
          </Body>
          <Right />
        </Header>
        <Content>

          {
            this.state.eventSource.map((event) => {
              return (
                <Card key={event._id}>
                  <CardItem header>
                    <Text>{event.name}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        {event.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text>{event.date}</Text>
                  </CardItem>
                </Card>

              );
            })
          }

        </Content>

      </Container>
    );
  }
}

const HEIGHT = Dimensions.get('window').height;
const width = '100%';


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#dd2a2a',
    height: HEIGHT / 40,

  },
  footerText: {
    color: 'black',
    fontSize: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '500',

  },
  header: {
    height: HEIGHT * .10,
    width,
    backgroundColor: '#dd2a2a'
  },
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  },
});