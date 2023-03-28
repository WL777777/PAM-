import React from 'react';
import {View, StyleSheet} from 'react-native';
import BotaoProps from './components/BotaoProps';

const App = () => {
 


return (
  <View style={styles.container}>
      <BotaoProps corfundo="red"
                  label="Olá mundo, vai curinthia"
                  msg={"A mensagem 2"}
                  
                  
                  />
              
              
               <BotaoProps corfundo="white"
                  label="Olá mundo, vai curinthia"
                  msg={"A mensagem 1"}
                  />   

  </View>

    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black'
    }
})

export default App;
