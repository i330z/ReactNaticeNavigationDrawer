import React,{ Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";


export default class HomeScreen extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()}></Icon>
                    </Left>
                    <Body>
                        <Text>Home</Text> 
                    </Body>
                </Header>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
  });
  