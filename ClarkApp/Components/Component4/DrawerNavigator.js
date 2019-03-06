import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomepageComponent from '../Component1/HomepageComponent'
import LoginComponent from '../Component2/LoginComponent';
import CalendarComponent from '../Component6/CalendarComponent';
import MenuDrawer from '../Component5/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

/*
I watched this video to learn how to use the react-navigation DrawerNavigator
https://www.youtube.com/watch?v=l3mw1e7rsuo
Whenever you want to add another page to the drawer naviagtor...
1)import the page 
2)enter the name to be displayed and the name of the imported page
ex. Settings: SettingsComponent,
Whichever page is listed first is the first page that is displayed
*/ 

//***Update: this is now changed to the MenuDrawer page under navLinks*** */

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
} 

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomepageComponent
        }, 
        Calendar: {
            screen: CalendarComponent
        },
        Login: {
            screen: LoginComponent
        },
        
    },
    DrawerConfig
);





export default createAppContainer(DrawerNavigator);