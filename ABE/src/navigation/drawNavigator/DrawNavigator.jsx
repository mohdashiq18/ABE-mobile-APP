// navigation/DrawNavigator.js
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import CustomDrawerContent from './CustomDrawerContent ';

const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
   
  return (
    <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#6a51ae', // Set your custom header background color
        },
        headerTintColor: '#FFFFFF', // Set your custom header text color
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }} drawerContent={(props) => <CustomDrawerContent {...props}   />}>
      <Drawer.Screen name="Dashboard" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SubItem1" component={Home} />
      <Drawer.Screen name="SubItem2" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
