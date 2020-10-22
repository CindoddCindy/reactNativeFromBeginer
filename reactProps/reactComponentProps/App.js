import React from 'react';

import{SafeAreaView, Text, View} from 'react-native';

const MyCustomTextWith = (props) => {
  return(
    <Text>
      Your First Name is {props.firstname}!
      and Last name is {props.secondname}
    </Text>
  );
};

const App = () => {
  return (
    <SafeAreaView style= {{flex:1}}>
    <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex : 1
    }}>
      <MyCustomTextWith
      firstname="fName1"
      secondname="lname1"
      />
      <MyCustomTextWith
      firstname="fName1"
      secondname="lname2"
      />
      </View>  
    </SafeAreaView>
  );
};
export default App;
