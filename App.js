import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Signup />
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
};

export default App;