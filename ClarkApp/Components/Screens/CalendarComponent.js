import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions} from 'react-native';
import {
    Container,
    Drawer,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Accordion,
} from 'native-base';
import { Calendar } from 'react-native-calendars';
import MenuButton from '../Home/MenuButton';

export default class CalendarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }
    /* The Calendar Component comes from the react native calendar module. 
    it can take in a marked dates array and add custom styles to it, so athletic events,
     academic, events and others can have their own color on the map. We just have to find a way
     to fetch data from different sources and we can mark different colors accordingly. 
     Below are different markings you can make and each one is displayed in the app under the calendar tab. 
    */
    render() {
        return (
                <Container style={{ flex: 0 }}>
                    <Header style ={styles.header}>
                        <Left>
                            <MenuButton navigation={this.props.navigation}/>
                        </Left>
                        <Body>
                            <Title>Calendar</Title>
                            </Body> 
                            <Right />
                            </Header>
                            
                            <Calendar style={styles.calendar}
                                style={styles.calendar}
                                onDayLongPress={this.onDayLongPress}
                                hideExtraDays
                                current={'2019-03-01'}
                                minDate={'2019-03-01'}
                                markingType={'custom'}
                                markedDates={{
                                    '2019-03-01': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'white',
                                                elevation: 2
                                            },
                                            text: {
                                                color: 'blue',
                                            },
                                        }
                                    },
                                    '2019-03-08': { selected: true },
                                    '2019-03-09': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'red',
                                                elevation: 4,
                                            },
                                            text: {
                                                color: 'white',
                                            },
                                        }
                                    },
                                    '2019-03-10': { disabled: true },
                                    '2019-03-14': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'green',
                                            },
                                            text: {
                                                color: 'white',
                                            },
                                        },
                                    },
                                    '2019-03-15': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'black',
                                                elevation: 2
                                            },
                                            text: {
                                                color: 'yellow',
                                            },
                                        }
                                    },
                                    '2019-03-20': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'pink',
                                                elevation: 4,
                                            },
                                            text: {
                                                color: 'blue',
                                            },
                                        }
                                    },
                                    '2019-03-21': { disabled: true },
                                    '2019-03-28': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'green',
                                            },
                                            text: {
                                                color: 'black',
                                                fontWeight: 'bold'
                                            },
                                        },
                                    },
                                    '2019-03-29': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'white',
                                                elevation: 2
                                            },
                                            text: {
                                                color: 'blue',
                                            },
                                        }
                                    },
                                    '2019-03-30': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'violet',
                                                elevation: 4,
                                                borderColor: 'red',
                                                borderWidth: 5,
                                            },
                                            text: {
                                                marginTop: 3,
                                                fontSize: 11,
                                                color: 'yellow',
                                            },
                                        }
                                    },
                                    '2019-03-31': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'green',
                                                borderRadius: 0,
                                            },
                                            text: {
                                                color: 'white',
                                            },
                                        },
                                    }
                                }}
                                hideArrows={false}
                            />
                        <Right />
                    <Content padder>
                    </Content>
                    <Footer1/>
                </Container>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}

const WIDTH = Dimensions.get('window').width;



const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 0,
        paddingTop: 10,
        borderBottomWidth: 0,
        borderColor: '#eee',
        height: 500,
        width: WIDTH ,
        paddingRight: 10,
        paddingLeft: 10,
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#dd2a2a'
    },
    container: {
        flex: 0,
        backgroundColor: 'white'
    },
    header: {
        height: 100,
        backgroundColor:'#dd2a2a',
    },
    footer: {
        height: 20,
        backgroundColor: '#dd2a2a',
    }
});
