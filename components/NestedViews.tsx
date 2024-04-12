// 2-20
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function NestedViews(): JSX.Element {
  const [entText, setEntText] = useState('');
  const [goals, setGoals] = useState([]);
  const goalInputHandler = text => {
    setEntText(text);
  };

  const addGoalHandler = () => {
    setGoals(currGoals => [...currGoals, entText]);
    //console.log(entText)
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map(goal => <View style={styles.goalItem} key={goal}><Text>{goal}</Text></View>)}
          {/* {goals.map((goal) => {
            <Text>{goal}</Text>
          })} */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});

export default NestedViews;
