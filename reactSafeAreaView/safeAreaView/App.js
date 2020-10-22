import React from 'react';

import {StyeleSheet, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style = {{flex :1}}>
      <View style = {{flex: 1, paddingHorizontal : 20}}>
        <Text style = {{fontSize:20}}>
          Example of SafeArea in React Native
        </Text>
        <Text style = {{ fontSize :20}}>
        In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
        </Text>

      </View>
    </SafeAreaView>
  );
};

export default App;