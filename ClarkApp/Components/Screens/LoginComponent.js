/*import React, { Component } from 'react';
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


export default class LoginComponent extends Component {

 
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
  Footer:{
    backgroundColor: '#dd2a2a',
    height: 20,
  }
});*/

import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions } from 'react-native';

import { Header } from 'react-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import MenuButton from '../Home/MenuButton';

const MIN_HEIGHT = Header.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  title: {
      textAlign: 'center',
      fontSize: 21,
      fontWeight: '500',
  }
});

class LoginComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderImageScrollView
          maxHeight={200}
          minHeight={MIN_HEIGHT}
          headerImage={require('/Users/brandennevius/Desktop/GitHub/ClarkApp/ClarkApp/resources/read.jpg')}
          renderForeground={() => (
            <View style={{ height: 150, justifyContent: 'center', alignItems: 'left' }}>
             
                <MenuButton navigation={this.props.navigation} />
    
            </View>
          )}
        >
          <View style={{ height: 1000 }}>
            <Text style={styles.title}>Whats Happening</Text>
            <TriggeringView onHide={() => console.log('text hidden')}>
              <Text>Scroll Me!</Text>
            </TriggeringView>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}
export default LoginComponent;

  

/*
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import MenuButton from '../Home/MenuButton';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
  }

  render() {
    return (
       
         
      
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <MenuButton navigation={this.props.navigation} />
        <HeaderImageScrollView
        
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={require('/Users/brandennevius/Desktop/GitHub/ClarkApp/ClarkApp/resources/read.jpg')} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <Text style={styles.navTitle}>
              
                
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
           
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.title}>
              
            </Text>
          </TriggeringView>
          <View style={styles.section}>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default LoginComponent;


const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
});


*/