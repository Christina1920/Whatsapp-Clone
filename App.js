import * as React from 'react';
import 'react-native-gesture-handler';
import { View,Text,StyleSheet } from 'react-native';
import StatusScreen from './src/screens/status';
import CallsScreen from './src/screens/calls';
import ProfileScreen from './src/screens/profile';
import Chat from './src/screens/chat';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
// const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#075E54'},
      }}>
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{tabBarLabel: 'Status'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{tabBarLabel: 'Calls'}}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Text style={styles.logo}>WHATSAPP</Text>
      </View>
        <MyTabs />
        <Chat/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  logo: {
    height: 40,
    color: 'white',
    backgroundColor: '#075E54',
    fontSize: 20,
    paddingLeft: 130,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
  }
});
