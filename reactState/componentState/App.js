import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

//contatn nilai cant change
const App = () => {
  const [valx, setValx] = useState(0);

  //constanta
  const [valy, setValy] = useState (100000000000);

  //hook api 
  setInterval(()=>{
    setValx(valx +1);
    setValy(valy-1);
  },1000);

  return (
    <SafeAreaView>
      <View>
         {/*
          Text Component will be re-render every time,
          when state changes.
         */}
        <Text>
          {/* valx will change in every second*/}
          {'Hello I am valx. I am increasing ' + valx}
        </Text>


        <Text>
          {/* valy will change in every second*/}
          {'Hello I am valy. I am decreasing ' + valy}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;