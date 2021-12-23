import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState('Learn React Native');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{ data }</Text>
    </View>
  );
}

export default App;
