import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, WebView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import MenuButton from '../Home/MenuButton';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Container } from 'native-base';


const MIN_HEIGHT = Header.HEIGHT+70;
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

class HoursComponent extends Component {



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
                    renderHeader={() => <Image source={require('../../resources/kneller.jpg')} style={styles.image} />}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <Text style={styles.navTitle}>
                                Facility Hours
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
                            scalesPageToFit={true}
                            source={{ uri: 'https://calendar.google.com/calendar/embed?title=Facility%20Open%20Hours&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&src=r95781vnocbhonipqphjc69mv4%40group.calendar.google.com&color=%23875509&src=j96up5hjafe0ka4vvqge32leqs%40group.calendar.google.com&color=%23AB8B00&src=voblqjn2b801pouk3ga84198b8%40group.calendar.google.com&color=%23182C57&src=vrpdlq4aq51rgk1h618rksd8vc%40group.calendar.google.com&color=%23711616&src=2n3ekg5ubarmhie9miemdgub6c%40group.calendar.google.com&color=%232952A3&ctz=America%2FNew_York' }}
                            style={{ marginTop: -2 }}
                        />

                    </Container>
                    <Text style={{ fontSize: 8, textAlign: "center", marginBottom: 10 }}>Copyright 2019</Text>
                </HeaderImageScrollView>


            </View>
        );
    }
}

export default HoursComponent;