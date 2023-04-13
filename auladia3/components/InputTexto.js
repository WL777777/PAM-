import React from 'react'
import {TextInput} from 'react-native'
import styled from 'styled-components/native'


const InputTexto = ({placeholder}) => {
    const InputTexto = styled.TextInput`
    width: 750px;
    padding: 12px 20px;
    margin: 10px 0;
    box-sizing: border-box;
    border-color:#0E798C;
    color:#0E798C;
    border-radius: 15px`
    

    return(
        <InputTexto
        placeholder={placeholder}
        />
    )
    
} 




export default InputTexto;