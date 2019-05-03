import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, WebView, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import MenuButton from '../Home/MenuButton';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Container } from 'native-base';


const MIN_HEIGHT = Header.HEIGHT + 70;
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
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 0,
    }
});


class DiningComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true };
      }
    
      hideSpinner() {
        this.setState({ visible: false });
      }

      render() {

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
                    renderHeader={() => <Image source={require('../../resources/diningHall.jpg')} style={styles.image} />}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <Text style={styles.navTitle}>
                                Dining Hours
              </Text>
                        </Animatable.View>
                    )}

                >
                    <TriggeringView
                        onHide={() => this.navTitleView.fadeInUp(200)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                    </TriggeringView>

                    <Container>
                        <WebView
                            onLoad={() => this.hideSpinner()}
                            source={{ uri: "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=15280&locationId=39951001&whereami=https://clarkdining.sodexomyway.com/dining-near-me/resident-dining#" }}
                            injectedJavaScript={'function hideHead(){elements = document.getElementsByClassName("alpha-nav"); while(elements.length > 0){elements[0].parentNode.removeChild(elements[0]);}   elements = document.getElementsByClassName("hero hero-general"); while(elements.length > 0){elements[0].parentNode.removeChild(elements[0]);}  };hideHead();'}
                            startInLoadingState
                        />
                        {this.state.visible && (<ActivityIndicator /> )}
                        <Text style={{ fontSize: 8, textAlign: "center", marginBottom: 10 }}>Copyright 2019</Text>
                    </Container>
                    
                </HeaderImageScrollView>
                

            </View>
        );
    }
}

export default DiningComponent;