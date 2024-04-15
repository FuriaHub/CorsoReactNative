import {StyleSheet, Text, View, Pressable} from 'react-native';

function GoalItem(props) {

  const delGoalHandler = () => {
    props.onDelGoalHandler(props.id)
  };

  return (
    <Pressable onPress={delGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
