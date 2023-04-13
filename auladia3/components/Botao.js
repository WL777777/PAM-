import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native"

const Botao = ({label}) => {
    const Botao = styled.TouchableOpacity`
    background-color: #0E798C;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin: 4px 2px;`
    ;

    return(
        <Botao>
            <Text style={{color: '#000'}}>{label}</Text>
        </Botao>
    )
}

export default Botao