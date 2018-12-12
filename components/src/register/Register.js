
import React, { Component } from 'react';
import {StyleSheet,StatusBar,View,Image,Alert} from 'react-native'
import { Container, Content,Icon,Header,Left,Right,Body,Button} from 'native-base';
import logo from '../../assets/img/logo.jpeg';
import {RegForm} from './RegForm'
import {Signup} from '../../service/auth'
export default class Register extends Component{
  state={
    user:{}
  }

  handleChange = (field, value) => {
    let {user} = this.state;
    user[field] = value;
    this.setState({user});
    console.log(user)

};

onSumbit=()=>{
  let {user}=this.state
  const pass = 'Tu contraseña no coincide';
  const msg = 'Llena todos los campos';
  const msgR= 'Tu registro se hizo correctamente'
  const msgE = 'Intentalo más tarde'
  var data = Object.keys(user)
  console.log(user)
  if(data.length < 6){
    Alert.alert(
          '¡Campos incompletos!',
          msg,
          [
              {
                  text: 'ok',
                  onPress:null
              },
        
          ]
      )
  }else if(user.password != user.passwordConfirmation){
      Alert.alert(
        'Contraseña Erronea!',
        pass,
        [
            {
                text: 'ok',
                onPress:null
            },
      
        ]
    )
    }else{
      Signup(user)
      .then(r => {
        Alert.alert(
          'Felicidades',
          msgE,
          [
              {
                  text: 'ok',
                  onPress:null
              },
        
          ]
      )
      })
      .catch(err =>{
        Alert.alert(
          'Algo Salio mal',
          msgR,
          [
              {
                  text: 'ok',
                  onPress:null
              },
        
          ]
      )
      })
      
    }
}
    render(){
      return(
        <Container style={styles.container}>
           <Header transparent>
                <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>                    
                 </Left>
                  <Body />
                  <Right/>
            </Header>
          <Content
              behavior="padding"
            >
          
            <StatusBar
              barStyle="light-content"
            />
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.img}/>
            </View>

          <RegForm onChange={this.handleChange} onSumbit={this.onSumbit} />
          </Content>
         
        </Container>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#0a5498',
      padding:10
  
    },
    logoContainer:{
      alignItems: 'center',
      flexGrow:1,
      justifyContent:'center'
    },
    img: {
    height:90,
    width: 90,
    }
  });