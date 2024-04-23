import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

function GoalInput(props) {
  const [entText, setEntText] = useState('');

  const goalInputHandler = text => {
    setEntText(text);
  };

  const addGoalHandler = () => {
    props.onAddGoalHandler(entText);
  };

  const onDismissModal = () => {
    props.onDismissModal();
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
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
                <Button title="Cancel" onPress={onDismissModal} />  
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
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b'
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
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});

export default GoalInput;
