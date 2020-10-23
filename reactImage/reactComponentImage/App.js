import React from 'react';

import {StyeleSheet, View, Text, SafeAreaView, Image} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Image source={{
          uri:
          ' https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
        }}
        style={{widt:400, height:400,  margin:16}}/>{}
        <Image style={{width : 66, height:58}}
        source={{
          uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyeleSheet.create({
  container:{
    flex: 1,
    alignItems : 'center',
    justyfyContent: 'center',
    paddingTop: 40,
    backgroundColor:'#ecf0f1',
  },
});
export default App;