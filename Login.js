import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import TextField from './TextField';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (value) => {
    setUsername(value)
  };

  const handlePasswordChange = (value) => {
    setPassword(value)
  };

  return (
    <View style={styles.container}>

       <Text style={styles.heading}>Login</Text>
      <TextField
       value = {username}
       placeH = "username"
       handleText = {(value) => handleUsernameChange(value)}
       eye = {false}
      />

      <TextField
       value = {password}
       placeH = "password"
       handleText = {(value) => handlePasswordChange(value)}
       eye= {true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style ={styles.buttonText}>Login</Text>

      </TouchableOpacity>

      <Text style = {{textAlign: "right", fontWeight: "thin", fontSize: 13, marginTop: 7}}>
            Not have an account? 
            <Text style= {{color: "#167bff"}}>
              Sign up
            </Text>
        </Text>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
       
    },

  button: {
    backgroundColor: '#167bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    textAlign : 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;