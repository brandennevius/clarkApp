import React from 'react';
import {View, Text,Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Icon, Left, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height

/*
This is what changes the display of the user interface for the drawer.
navLink is a function that uses touchableOpacity to activate and display links.
*/
export default class MenuDrawer extends React.Component {
    
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

   
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style = {styles.img} source= {require('../../resources/clarkSeal.png')} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}></Text>
                            </View>
                            
                        </View>
                    </View>
                    
                    <View style={styles.bottomLinks}>
                        <Text>  </Text>
                        {this.navLink('Home', 'Home')}
                        <Text>  </Text>
                        {this.navLink('Calendar', 'Calendar')}
                        <Text>  </Text>
                        {this.navLink('Hours', 'Hours')}
                        <Text>  </Text>
                        {this.navLink('Dining', 'Dining')}
                        <Text>  </Text>
                        {this.navLink('Scarlett', 'Scarlett')}
                    
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    {this.navLink('Login', 'Login')}
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
    scroller: {
        flex: 1,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
        paddingLeft: 50
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    topLinks: {
        height: 150,
        backgroundColor: 'white',
    },
    img: {
        
        height: 110 ,
        width: 110,
        alignItems: 'center'
    
    },
    imgView: {
        alignItems: 'center'
    
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: '#dd2a2a',
        paddingTop: 10,
        paddingBottom: 450,
        fontSize: 14,
        padding: 20,
        paddingLeft:55
        
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dd2a2a',
        
        paddingBottom: 60
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'black',
        paddingBottom: 25
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    }
})