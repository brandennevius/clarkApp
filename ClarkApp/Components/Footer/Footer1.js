import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Footer, FooterTab, Button, Text} from 'native-base'

export default class Footer1 extends Component{
    render(){
        return(
            <Footer style={styles.Footer}>
                <FooterTab>
                    <Button full>
                        <Text></Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    Footer: {
        backgroundColor: '#dd2a2a',
        height: 20,
    }
});
