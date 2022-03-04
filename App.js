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
  TouchableOpacity,
  ActivityIndicator,
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

const toggleLoading = () => {
    this.showLoader
  };
const App = () => (

  <View style={styles.rowContainer}>

    <View style={styles.Button1}>
    <Button
        title="Default"
        onPress={() => Alert.alert('Default Text Button has been pressed.')}
    />
    <Separator />
    <Button
        title="Icon"
        onPress={() => Alert.alert('Icon Text Button has been pressed.')}
    />
    <Separator />
    <Button
        title="Loading"
        onPress={() => Alert.alert('Loading Text Button has been pressed.')}
    />
    </View>



    <View style={styles.Button2}>
    <Button
        title="Default"
        onPress={() => Alert.alert('Default Text Button has been pressed.')}
    />

    <Separator />

    <Button
        title="Icon"
        onPress={() => Alert.alert('Icon Text Button has been pressed.')}
    />
    <Separator />
    <TouchableOpacity onPress={toggleLoading}>
    <Button
       title="Loading"
       onPress={() => Alert.alert('Loading Text Button has been pressed.')}
   />
   </TouchableOpacity>
   </View>

   <View style={styles.Button3}>
   <Button
       title="Default"
       onPress={() => Alert.alert('Default Text Button has been pressed.')}
   />

   <Separator />

   <Button
       title="Icon"
       onPress={() => Alert.alert('Icon Text Button has been pressed.')}
   />
   <Separator />
   <TouchableOpacity onPress={toggleLoading}>
   <Button
      title="Loading"
      onPress={() => Alert.alert('Loading Text Button has been pressed.')}
  />
  </TouchableOpacity>
  </View>
  </View>




);
const styles = StyleSheet.create({
    rowContainer:{
        flexDirection: 'row'
        },
        Button1: {
            alignItems: 'baseline',
            marginHorizontal: 27,
            marginVertical: 10,
        },

        Button2: {
            justifyContent:'center',
            alignItems: 'center',
            marginHorizontal: 27,
            marginVertical: 10
        },
        Button3: {
            alignItems: 'flex-end',
            marginHorizontal: 27,
            marginVertical: 10
        },
        separator: {
        marginVertical: 8,
      },


});


export default App;