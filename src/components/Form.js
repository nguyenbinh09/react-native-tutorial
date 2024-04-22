import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {removeTodo} from '../redux/action';
import store from '../redux/store';
import {useDispatch} from 'react-redux';

const Form = ({data}) => {
  const dispatch = useDispatch();
  const [removed, setRemoved] = useState(false);

  const handleRemove = () => {
    dispatch(removeTodo(data.id));
    setRemoved(true);
  };

  if (removed) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Task: {data.task}</Text>
        <Text style={styles.text}>Date: {data.date}</Text>
      </View>
      <View style={styles.button_container}>
        <Button title="view" onPress={() => {}} />
        <Button color={'red'} title="remove" onPress={handleRemove} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  button_container: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text_container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
