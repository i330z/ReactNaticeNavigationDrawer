import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'; 
 
import HomeScreen from './components/HomeScreen'
import SettingsScreen from './components/SettingsScreen'

export default class App extends React.Component {
    render(){
      return (  
          <MyApp/>
      );
    }
}


const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.container}>
    <SafeAreaView>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);


const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},{
  contentComponent: CustomDrawerContentComponent
})

const MyApp = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
