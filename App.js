/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Root} from 'react-native';
import Register from './components/src/register/Register'
import {Header,Left,Right,Body,Container,Icon} from 'native-base'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        
        <Register/>
   
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#0a5498',
  }
});