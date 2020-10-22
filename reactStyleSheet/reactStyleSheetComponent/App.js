import React from 'react';

import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style= {styles.title}>Hello</Text>
      <Text
      style={{
        color: 'green',
        fontSize:18
      }}
      >Who you are</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:25,
    alignItems:'center',
    fontWeight:'bold',
    color:'red'
  },
});

export default App;