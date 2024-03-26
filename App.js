import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import Axios from 'axios';

const Item = ({item}) => (
  <View style={styles.card}>
    <Text style={styles.text_in_card}>
      Name:
      <Text style={styles.text_normal}> {item.name}</Text>
    </Text>
    <Text style={styles.text_in_card}>
      Country:
      <Text style={styles.text_normal}> {item.country}</Text>
    </Text>
    <Text style={styles.text_in_card}>
      Url:
      <Text style={styles.text_normal}> {item.web_pages}</Text>
    </Text>
  </View>
);

function MyComponent() {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState('');
  const [searched, setSearched] = useState(false);

  const searchUniversities = async country => {
    if (country === '') {
      console.log(searched);
      return;
    } else {
      try {
        console.log(searched);
        const response = await Axios.get(
          `http://universities.hipolabs.com/search?country=${country}`,
        );
        setUniversities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <TextInput
          placeholder="Search"
          style={styles.search_bar}
          onChangeText={value => {
            setCountry(value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (country === '') {
              setSearched(false);
            } else {
              setSearched(true);
            }
            searchUniversities(country);
          }}
          style={styles.search_button}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {searched ? (
        <View style={styles.body_container}>
          <FlatList
            style={styles.list}
            data={universities}
            renderItem={({item}) => <Item item={item} />}
          />
        </View>
      ) : null}
    </View>
  );
}

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  header_container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  search_bar: {
    width: '75%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: 'black',
  },
  body_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'space-around',
    padding: 10,
    alignSelf: 'center',
  },
  text_in_card: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text_normal: {
    fontWeight: 'normal',
  },
  search_button: {
    width: '15%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
