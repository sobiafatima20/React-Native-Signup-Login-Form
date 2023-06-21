import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const TextInputField = (prop) => {
 const [eye, setEye] = useState(false);
 const handleToggleEye = () => {
 setEye(!eye);
 };
 return (
 
 <View style={styles.container}>
 <TextInput
 placeholder= {prop.placeH}
 secureTextEntry= {prop.eye?(!eye? true : false) : false}
 value={prop.value} 
 onChangeText={(txt) => prop.handleText(txt)}
 autoCorrect = {false}
 autoCapitalize = {false}
 style={styles.input}
 />
 {prop.eye ? (
 <TouchableOpacity onPress={() => handleToggleEye(!eye)} style={styles.eyeIcon}>
 <FontAwesome5
 name= {eye? "eye" : "eye-slash"}
 size={14}/>
 </TouchableOpacity>
 ) : null}
 
 </View>
 
 
 );
};
const styles = StyleSheet.create({
 container: {
 flexDirection: 'row',
 alignItems: 'center',
 borderWidth: 1,
 borderColor: 'gray',
 
 borderRadius: 5,
 paddingHorizontal: 10,
 marginBottom: 10,
 },
 input: {
 flex: 1,
 paddingVertical: 5,
 fontSize: 16,
 width: '100%',
 },
 eyeIcon: {
 marginLeft: 10,
 },
});
export default TextInputField;