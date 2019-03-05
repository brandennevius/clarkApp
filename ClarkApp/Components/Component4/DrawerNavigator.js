import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomepageComponent from '../Component1/HomepageComponent'
import LoginComponent from '../Component2/LoginComponent';

/*
I watched this video to learn how to use the react-navigation DrawerNavigator
https://www.youtube.com/watch?v=l3mw1e7rsuo
Whenever you want to add another page to the drawer naviagtor...
1)import the page 
2)enter the name to be displayed and the name of the imported page
ex. Settings: SettingsComponent,
Whichever page is listed first is the first page that is displayed
*/
const DrawerNavigator = createDrawerNavigator({
    Home: HomepageComponent,
    Login: LoginComponent
    
});

export default createAppContainer(DrawerNavigator);