import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Form from './Form';

const ToDoList = ({data}) => {
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <Form data={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});
