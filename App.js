/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Icon,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Separator = () => (
  <View style={styles.separator} />
);
const App = () => (

  <View style={styles.Button1}>

    <Button
        title="Default"
        onPress={() => Alert.alert('Default Text Button has been pressed.')}
    />
    <Separator />
    <Button
        title="Icon"
        onPress={() => Alert.alert('Default Text Button has been pressed.')}
    />
    <Separator />
    <Button
        title="Loading"
        onPress={() => Alert.alert('Default Text Button has been pressed.')}
    />


  </View>

);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 50
        },
        Button1: {
            marginRight: 300,
            marginHorizontal: 10,
            marginVertical: 10,
        },
        Button2: {
            marginRight: 300,
            marginHorizontal: 10,
            marginVertical: 10
        },
        Button3: {
            marginRight: 300,
            marginHorizontal: 10,
            marginVertical: 10
        },
        separator: {
        marginVertical: 8,
      },


});


export default App;