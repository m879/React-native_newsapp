import React, { Component,useState } from 'react';
import { Container, Header, Content, Tab, Tabs,
  Left, Body, Right, Title, Button, Fab,Icon,ActionSheet,  Item, Input , Textarea, Form ,Label} from 'native-base';
import Tabs1 from './Tab1';
import Tabs2 from './Tab2';
import Tabs3 from './Tab3';

// import {  View} from "react-native";

import { Dimensions,Image } from 'react-native';


import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";


const App=()=> {


  const [modalVisible, setModalVisible] = useState(false);

  let width = Dimensions.get('window').width-40;

    return (
      <Container >
        <Header>
          <Left>
            <Button transparent  
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Ahmed News</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="General"><Tabs1/></Tab>
          <Tab heading="Business"><Tabs2/></Tab>
          <Tab heading="Technology"><Tabs3/></Tab>
        </Tabs>



        <Modal  animationType="slide"  visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>About developer</Text>
            <Image source={{uri: 'https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_960_720.jpg'}} 
         style={{height: 100, width: 100,borderRadius:100,marginTop:30,marginLeft:'auto',marginRight:'auto'}}
         />

            <Text style={{color:'green',fontSize:20,marginBottom:10,marginTop:20}}>Hi!</Text>
            <Text style={styles.modalText2}>I'm Meraj Ahmed</Text>
            <Text style={styles.modalText2}>Sophomore from ZHCET(AMU)</Text>
            <Text style={styles.modalText2}>This is my first work on app development</Text>
          <Button full danger rounded  style={{marginTop:20}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
            <Text style={{color:'white'}}>Cancel</Text>
          </Button>
          </View>
        </View>
      </Modal>

      </Container>
    );
  }


  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor:'rgba(0,0,0,0.6)'
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      alignSelf: 'stretch',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop:20,
      width:100
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color:'red',
      fontSize:20,
      fontWeight:'900'
    },
    modalText2: {
      marginBottom:5,
      textAlign: "center",
      color:'blue',
      fontSize:15,
      fontWeight:'900'
    }
  });
  



export default  App;