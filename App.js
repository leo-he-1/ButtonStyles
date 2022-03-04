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


const toggleLoading = () => {
    this.showLoader
  };
const App = () => (

  <View style={styles.rowContainer}>

        <View style={styles.ButtonContainer1}>
            <View style={styles.Button1}>
                <Button
                    title="Default"
                    color="blue"
                    onPress={() => Alert.alert('Default Text Button has been pressed.')}
                />
            </View>
            <View style={styles.Button1}>
                <Button
                    title="Icon"
                    onPress={() => Alert.alert('Icon Text Button has been pressed.')}
                />
            </View>
            <View style={styles.Button1}>
                <Button
                    title="Loading"
                    onPress={() => Alert.alert('Loading Text Button has been pressed.')}
                />
            </View>
        </View>



        <View style={styles.ButtonContainer2}>
            <View style={styles.Button2}>
                <Button
                    title="Default"
                    onPress={() => Alert.alert('Default Text Button has been pressed.')}
                />
            </View>
            <View style={styles.Button2}>
                <Button
                    title="Icon"
                    onPress={() => Alert.alert('Icon Text Button has been pressed.')}
                />
            </View>
            <View style={styles.Button2}>
                <Button
                    title="Loading"
                    onPress={() => Alert.alert('Loading Text Button has been pressed.')}
                />
            </View>
       </View>

       <View style={styles.ButtonContainer3}>
           <View style={styles.Button3}>
               <Button
                   title="Default"
                   onPress={() => Alert.alert('Default Text Button has been pressed.')}
               />
           </View>
           <View style={styles.Button3}>
               <Button
                   title="Icon"
                   onPress={() => Alert.alert('Icon Text Button has been pressed.')}
               />
           </View>
           <View style={styles.Button3}>
               <Button
                   title="Loading"
                   onPress={() => Alert.alert('Loading Text Button has been pressed.')}
               />
           </View>
      </View>
  </View>




);
const styles = StyleSheet.create({
    rowContainer:{
        flexDirection: 'row'
        },
        ButtonContainer1: {
            alignItems: 'baseline',
            marginHorizontal: 27,
            marginVertical: 10,
        },

        ButtonContainer2: {
            alignItems: 'center',
            marginHorizontal: 27,
            marginVertical: 10,
        },
        ButtonContainer3: {
            alignItems: 'flex-end',
            marginHorizontal: 27,
            marginVertical: 10
        },
        Button1: {
            marginVertical: 10,
            color: 'blue'
        },
        Button2: {
            marginVertical: 10,
            borderWidth: 1,
            borderColor: 'blue',
        },
        Button3: {
            marginVertical: 10,
        },
        text: {
        fontSize: 16,
        color:'blue',
        }


});


export default App;