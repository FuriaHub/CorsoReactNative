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
    <View style={{padding: 50, flexDirection: 'row', width: '100%', height: 300, justifyContent: 'space-around', alignItems: 'stretch'}}>
      <View
        style={styles.c1}
      ><Text>1</Text></View>
      <View
        style={styles.c2}
      ><Text>2</Text></View>
      <View
        style={styles.c3}
      ><Text>3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  c1: {
    backgroundColor: 'red',
    flex:1,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  c2: {
    backgroundColor: 'blue',
    flex:2,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  c3: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default FBDeep;
