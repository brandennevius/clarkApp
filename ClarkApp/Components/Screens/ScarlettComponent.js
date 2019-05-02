//This is an example code to Load Local HTML File in WebView//
import React, { Component } from 'react';
//import react in our code. 

import { StyleSheet, WebView, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Text, Right} from 'native-base';
import MenuButton from "../Home/MenuButton";

//import all the components we are going to use. 

class ScarlettComponent extends Component {
    render() {
        return (
            <Container>
                <Header style= {styles.header}>
                    <Left>
                        <MenuButton navigation={this.props.navigation} />
                    </Left>
                    <Body>
                        <Text style={styles.title}>Scarlett</Text>
                    </Body>
                    <Right />
                </Header>
                <WebView
                    style={styles.WebViewStyle}
                    //Loading html file from project folder
                    source={require('../../resources/Scarlett.pdf')}
                    //Enable Javascript support
                    javaScriptEnabled={true}
                    //For the Cache
                    domStorageEnabled={true}
                />
            </Container>

        );
    }
}
export default ScarlettComponent;

   
const HEIGHT = Dimensions.get('window').height;
const width = '100%';

const styles = StyleSheet.create({
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 0,
    },
    header: {
        height: HEIGHT * .10,
        width,
        backgroundColor: '#dd2a2a'
      },
        headerStyle: {
          fontSize: 36,
          textAlign: 'center',
          fontWeight: '100',
        }
});