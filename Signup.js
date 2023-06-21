import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import TextInputField from './TextInputField';
const Signup = () => {
 const [firstname, setFirstname] = useState('');
 const [lastname, setLastname] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [retypepassword, setReTypePassword] = useState('');
 
 const handleFirstnameChange = (value) => {
 setFirstname(value)
 };
 const handleLastnameChange = (value) => {
 setLastname(value)
 };
 const handleEmailChange = (value) => {
 setEmail(value)
 };
 const handlePasswordChange = (value) => {
 setPassword(value)
 };
 const handleReTypePasswordChange = (value) => {
 setReTypePassword(value)
 };
 return (
 <View style={styles.container}>
 <Text style={styles.heading}>Sign Up</Text>
 <TextInputField
 value = {firstname}
 placeH = "First Name"
 handleText = {(newvalue) => handleFirstnameChange(newvalue)}
 eye = {false}
 />
 <TextInputField
 value = {lastname}
 placeH = "Last Name"
 handleText = {(newvalue) => handleLastnameChange(newvalue)}
 eye = {false}
 />
 <TextInputField
 value = {email}
 placeH = "Enter Email"
 handleText = {(newvalue) => handleEmailChange(newvalue)}
 eye = {false}
 />
 <TextInputField
 value = {password}
 placeH = "Enter Password"
 handleText = {(newvalue) => handlePasswordChange(newvalue)}
 eye= {true}
 />
 <TextInputField
 value = {retypepassword}
 placeH = "Re-Type Password"
 handleText = {(newvalue) => handleReTypePasswordChange(newvalue)}
 eye= {true}
 />
 <TouchableOpacity style={styles.button}>
 <Text style ={styles.buttonText}>Sign Up</Text>
 </TouchableOpacity>
 <Text style = {{textAlign: "right", fontWeight: "thin", fontSize: 13, marginTop: 7}}>
 Already have an account? 
 <Text style= {{color: "#167bff"}}>
 Sign in
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
export default Signup;