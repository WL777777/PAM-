import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoProps = ({label, corfundo, msg}) => {    // propriedades são a label, corfundo, e onPress. o vulgo das propriedades é props.
    const botaoStyle ={
        backgroundColor: corfundo,
        padding:35,
        borderRadius: 5,
    };

    const handlePress = () => {
        console.log(msg)
    }

return (
    // esse onPress é um evento, igual aquele eventclicklistener
    <TouchableOpacity onPress={handlePress} style={botaoStyle}> 
    <Text>{label}</Text>
    </TouchableOpacity>

    
) 
}

export default BotaoProps;