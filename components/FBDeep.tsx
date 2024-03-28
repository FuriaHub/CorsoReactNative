// 2-21
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function FBDeep(): JSX.Element {

  return (
    <View style={{padding: 50}}>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><Text>1</Text></View>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><Text>2</Text></View>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><Text>3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default FBDeep;
