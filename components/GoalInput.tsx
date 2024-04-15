import {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

function GoalInput(props) {
  const [entText, setEntText] = useState('');

  const goalInputHandler = text => {
    setEntText(text);
  };

  const addGoalHandler = () => {
    props.onAddGoalHandler(entText);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={entText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Add Goal" onPress={addGoalHandler} />  
            </View>
            <View style={styles.button}>
                <Button title="Cancel" />  
            </View>
        </View>        
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
    width: '100%'
    // justifyContent: 'space-between',
  },
  button: {
    //marginHorizontal: 8,
    width: '30%',
  }
});

export default GoalInput;
