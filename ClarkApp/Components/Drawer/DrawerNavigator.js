import React from 'react';
import { Platform, Dimensions} from 'react-native';
import { createDrawerNavigator, createAppContainer, closeDrawer } from 'react-navigation';

import HomepageComponent from '../Home/HomepageComponent'
import LoginComponent from '../Screens/LoginComponent';
import CalendarComponent from '../Screens/CalendarComponent';
import MenuDrawer from '../Drawer/MenuDrawer';
import HoursComponent from '../Screens/HoursComponent';
import ScarlettComponent from '../Screens/ScarlettComponent';

const WIDTH = Dimensions.get('window').width;

/*
I watched this video to learn how to use the react-navigation DrawerNavigator
https://www.youtube.com/watch?v=l3mw1e7rsuo
Whichever page is listed first is the first page that is displayed.

ContentComponent is used to add a component to paste onto the menu bar.
MenuDrawer is being passed navigation variable that is passed to the contentComponent function.
Since navigation is now in the menuDrawer component it can be passed to navlink in menuDrawer
*/
const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
} 



const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomepageComponent,
            
        },
        Calendar: {
            screen: CalendarComponent
        },
        Login: {
            screen: LoginComponent
        },
        Hours: {
            screen: HoursComponent
        },
        
        
    },
    DrawerConfig
);


export default createAppContainer(DrawerNavigator);