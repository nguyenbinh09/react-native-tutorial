import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Alert} from 'react-native';

//Tạo user structure
//Tạo list các môn học mà user học

class User {
  constructor(username, password, subjects) {
    this.username = username;
    this.password = password;
    this.subjects = subjects;
  }
}
class Subject {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}
function MyComponent() {
  const users = [
    new User('admin1', '123456', [new Subject('Đồ án 1', 'SE121')]),
    new User('admin2', '123456', [
      new Subject('Đồ án 1', 'SE121'),
      new Subject('Công nghệ Web và ứng dụng', 'SE347'),
    ]),
    new User('admin3', '123456', [
      new Subject('Đồ án 1', 'SE121'),
      new Subject('Công nghệ Web và ứng dụng', 'SE347'),
      new Subject('Phân tích và thiết kế hệ thống', 'SE114'),
    ]),
    new User('admin4', '123456', [
      new Subject('Đồ án 1', 'SE121'),
      new Subject('Công nghệ Web và ứng dụng', 'SE347'),
      new Subject('Phân tích và thiết kế hệ thống', 'SE114'),
      new Subject('Nhập môn Công nghệ phần mềm', 'SE104'),
    ]),
    new User('admin5', '123456', [
      new Subject('Đồ án 1', 'SE121'),
      new Subject('Công nghệ Web và ứng dụng', 'SE347'),
      new Subject('Phân tích và thiết kế hệ thống', 'SE114'),
      new Subject('Nhập môn Công nghệ phần mềm', 'SE104'),
      new Subject('Lập trình hướng đối tượng', 'IT002'),
    ]),
  ];
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nav, setNav] = React.useState(false);
  const [user, setUser] = React.useState({});

  const checkLogin = () => {
    const tmp = users.find(
      user => user.username === username && user.password === password,
    );
    if (username !== '' && password !== '' && tmp !== undefined) {
      setNav(true);
      setUser(tmp);
    } else {
      1;
      Alert.alert('Login Failed');
    }
  };
  return nav === false ? (
    <View style={styles.Container}>
      <Text style={styles.Text}>Login</Text>
      <View style={styles.containerInput}>
        <Text style={styles.text2}>Username</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.TextInput}
        />
        <Text style={styles.text2}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          style={styles.TextInput}
        />
      </View>
      <Button title="Login" color={'red'} onPress={checkLogin} />
    </View>
  ) : (
    <View style={styles.Container}>
      <Text style={styles.Text}>List of subjects</Text>
      <View style={styles.header}>
        <Text style={styles.heading1}>Code</Text>
        <Text style={styles.heading2}>Session</Text>
      </View>

      <View>
        {user.subjects.map((subject, index) => (
          <View style={styles.row} key={index}>
            <Text style={{...styles.cell, color: 'blue'}}>{subject.code}</Text>
            <Text style={styles.cell}>{subject.name}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setNav(false);
        }}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MyComponent;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  containerInput: {
    width: '70%',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 50,
  },
  TextInput: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  heading1: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
  },
  heading2: {
    flex: 3,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    height: 'auto',
  },
  cell: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
});

// function MyComponent() {
//     const [weight, setWeight] = React.useState('');
//     const [height, setHeight] = React.useState('');
//     const [bmi, setBmi] = React.useState(0);
//     const compute = () => {
//         if(weight !== "" && height !== ""){
//             const h = height / 100;
//             const result = weight / (h * h);
//             setBmi(result.toFixed(2));
//         } else {
//             setBmi(0);
//         }

//     }
//     return (
//         <View style={styles.Container}>
//            <View style={styles.containerInput}>
//                  <Text  style={styles.text2}>Weight (KG)</Text>
//                  <TextInput name="weight" value={weight} onChangeText={text => setWeight(text)}  style={styles.TextInput}/>
//                  <Text style={styles.text2}>Height (CM)</Text>
//                  <TextInput name="height" value={height} onChangeText={text => setHeight(text)} style={styles.TextInput}/>
//             </View>
//             <Text style={styles.text2}>BMI: {bmi}</Text>
//             <TouchableOpacity style={styles.button} onPress={compute}>
//                 <Text style={styles.textButton}>Compute</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default MyComponent;

// const styles = StyleSheet.create({
//     Container: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: "transparent",
//         alignItems: "center"},
//     containerInput: {
//         width: "70%",
//         backgroundColor: "transparent",
//         alignItems: "flex-start",
//         alignSelf:"center",
//         marginTop: 100,
//         },
//     TextInput: {
//         width: "100%",
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         alignSelf: "center",
//         },
//     text2: {
//         paddingTop: 20,
//         fontSize: 20,
//         fontWeight: "bold",
//         textAlign: "right",
//         },
//     button: {
//         width: "50%",
//         height: 50,
//         backgroundColor: "blue",
//         marginTop: 70,
//         borderRadius: 10,
//         justifyContent: "center",
//     },
//     textButton: {
//         color: "white",
//         fontSize: 20,
//         fontWeight: "bold",
//         textAlign: "center",
//     }
// });
