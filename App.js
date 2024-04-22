import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ToDoList from './src/components/ToDoList';
import {Provider} from 'react-redux';
import {addTodo} from './src/redux/action';
import store from './src/redux/store';

const MyComponent = () => {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  let data = store.getState().todoList;
  // const [data, setData] = useState([
  //   {id: 1, task: 'Task 1', date: '2021-10-10'},
  //   {id: 2, task: 'Task 2', date: '2021-10-11'},
  //   {id: 3, task: 'Task 3', date: '2021-10-12'},
  // ]);
  const handleTaskChange = e => {
    setTask(e.nativeEvent.text);
  };

  const handleDateChange = e => {
    setDate(e.nativeEvent.text);
  };
  return isAdding == false ? (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.textAppBar}>ToDo List</Text>
      </View>
      <ToDoList data={data} />
      <View style={styles.buttonContainer}>
        <Button
          title="ADD"
          color={'blue'}
          onPress={() => {
            setIsAdding(true);
          }}
        />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        type="text"
        onChange={handleTaskChange}
        placeholder="Enter task"
      />
      <TextInput
        style={styles.input}
        type="date"
        onChange={handleDateChange}
        placeholder="Select date"
      />
      <View style={styles.button_container}>
        <Button
          title="Save"
          onPress={() => {
            dispatch(addTodo({id: data.length + 1, task: task, date: date}));
            setIsAdding(false);
          }}
        />
        <Button
          color={'red'}
          title="Cancel"
          onPress={() => {
            setIsAdding(false);
          }}
        />
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header_container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#56E6F2',
  },
  textAppBar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  button_container: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});
