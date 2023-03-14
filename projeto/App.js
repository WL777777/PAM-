import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native'; // view, é uma div. ScrollView, é uma div com scroll. 

const curinthia = () => {
  return (
    <ScrollView>
      <View>
      <Text
         style={{
           fontSize: 45,
           alignSelf:"center",
           color:"black",
         }}
         >
           CURINTHIA
      </Text>
                <Image
                 source={require('./assets/curinthia.png')}
                  style={{width:200, height: 210, alignSelf:"center"}}
                />
           <StatusBar style ="auto"/>     
        </View> 
        <TextInput
        style={{
          height:40,
          boderColor:"gray",
          borderWidth:1,
          padding:10,
          margin:100,
          width:250,
          textAlign:"center"
        }}
        defaultValue= "Digita ai curinthia"
        />
    </ScrollView>
  )
}


export default curinthia;


