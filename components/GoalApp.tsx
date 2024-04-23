// 2-20
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button, Modal} from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

function GoalApp(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = newGoalText => {
    setGoals(currGoals => [
      ...currGoals,
      {text: newGoalText, id: Math.random().toString()},
    ]);
    onDismissModal();
  };

  const onDelGoalHandler = (id) => {
    setGoals(prevGoals => 
      prevGoals.filter(item => item.id !== id)
    );
  };

  const onShowModal = () => {
    setModalVisible(true);
  }

  const onDismissModal = () => {
    setModalVisible(false);
  }

  return (

    <View style={styles.appContainer}>
      <Button title="Aggiungi un goal" color="#5e0acc" onPress={onShowModal} />
      <GoalInput onAddGoalHandler={addGoalHandler} onDismissModal={onDismissModal} visible={modalVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={i => {
            return <GoalItem text={i.item.text} id={i.item.id} onDelGoalHandler={onDelGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        {/* {goals.map(goal => <View style={styles.goalItem} key={goal}><Text style={styles.goalText}>{goal}</Text></View>)} */}
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
  goalsContainer: {
    flex: 5,
  },
});

export default GoalApp;
