import React, { Component } from 'react';
import { Container,Header,Title,Content, Left,Right,Body,Text,View, WebView } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import MenuButton from '../Home/MenuButton';
import Footer1 from '../Footer/Footer1';



export default class DiningComponent extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <Header style={styles.header}>
                    <Left>
                        <MenuButton navigation={this.props.navigation} />
                    </Left>
                    <Body>
                        <Text style={styles.title}>Dining Menu</Text>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                </Content>
            
            </Container>
        );
    }
}

const width = '100%';
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        height: HEIGHT * .10,
        width,
        backgroundColor: '#dd2a2a'

    },
    title: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '500',
    }
});