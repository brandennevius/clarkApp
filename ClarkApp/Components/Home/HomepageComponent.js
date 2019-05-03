import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, ActivityIndicator, DeviceEventEmitter } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import { Card, CardItem, Body } from 'native-base';
import MenuButton from '../Home/MenuButton';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';


const MIN_HEIGHT = Header.HEIGHT + 20;
const MAX_HEIGHT = 250;

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
    marginTop: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
  imageLogo: {
    height: MAX_HEIGHT / 2.0,
    width: Dimensions.get('window').width / 2.0,
    resizeMode: 'contain',

  },
});

class HomePageComponent extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
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
      <View style={{ flex: 1 }}>
        <MenuButton navigation={this.props.navigation} />
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={require('../../resources/read.jpg')} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <Text style={styles.navTitle}>
                What's Happening?
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Image source={require('../../resources/eventsLogo.png')} style={styles.imageLogo} />
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.title}>
              <Text style={styles.name}>What's Happening?</Text>
            </Text>
          </TriggeringView>

          {
            this.state.eventSource.map((event) => {
              return (

                <Card key={event._id} style={{ marginRight: 10, marginLeft: 10 }}>
                  <CardItem header>
                    <Text style={{ fontWeight: 'bold' }}>Event: {event.title}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        {event.description}
                        Time: {event.time}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text style={{ fontWeight: 'bold' }}>Place: {event.place}</Text>
                  </CardItem>
                </Card>

              );
            })
          }
          <Text style={{ fontSize: 8, textAlign: "center", marginBottom: 10 }}>Copyright 2019</Text>
        </HeaderImageScrollView>


      </View>
    );
  }
}

export default HomePageComponent;