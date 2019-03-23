import React, { Component } from 'react';
import { Container,Header,Title,Content, Left,Right,Body,Text } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import MenuButton from '../Home/MenuButton';
import Footer1 from '../Footer/Footer1';



export default class HoursComponent extends Component {
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
                        <Title style={styles.Title}></Title>
                        <Text style={styles.Date}>Hours Page</Text>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                </Content>
                <Footer1 />
            </Container>
        );
    }
}

const width = '100%';
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Title: {
        textAlign: 'center',
        color: '#dd2a2a',
        alignItems: 'center',
    },
    header: {
        height: HEIGHT * .10,
        width,
        backgroundColor: '#dd2a2a'

    }
});