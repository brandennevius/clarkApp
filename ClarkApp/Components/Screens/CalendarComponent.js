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
import Footer1 from '../Footer/Footer1';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;

export default class CalendarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
       
    }
    /* The Calendar Component comes from the react native calendar module. 
    it can take in marked dates  and add custom styles to it, so athletic events,
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
                            <Title>CALENDAR</Title>
                            </Body> 
                            <Right />
                            </Header>
                            
                            <Calendar style={styles.calendar}
                                style={styles.calendar}
                                onDayLongPress={this.onDayLongPress}
                                hideExtraDays
                                current={today}
                                minDate={'2019-03-01'}
                                markingType={'custom'}
                                markedDates={{
                                    current: {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'red',
                                                elevation: 2,
                                                borderRadius: 0,
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
                                    today: {
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
                                    '2019-04-28': {
                                        customStyles: {
                                            container: {
                                                backgroundColor: 'red',
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
                        <Text style = { styles.Events}> EVENTS </Text>
                        <Right />
                    <Content padder>
                    <View style={{ flex: 3, backgroundColor: '#dd2a2a'}}>
                    </View>
                    </Content>
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
const HEIGHT = Dimensions.get('window').height;
const width = '100%';



const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 0,
        paddingTop: 10,
        borderBottomWidth: 0,
        borderColor: '#eee',
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
        height: HEIGHT * .10,
        width,
        backgroundColor: '#dd2a2a'

    },
    Footer1: {
        
        backgroundColor: '#dd2a2a',
    },
    FooterTab: {
        backgroundColor: 'red',
    },
    Events: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '400',
    }
});
