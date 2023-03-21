import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Contador extends React.Component{
    constructor(){ // método construtor serve pra vc inicalizar uma classe. 
        super();   // ele é uma classe poderosa kkk
        this.state = {  // ele vai criar váriaveis, ele vai criar todas as variaveis possiveis.     TODOS OS ATRIBUTOS DO OBJETO FICAM NO STATE
            contador:0,     // contador é uma váriavel.     
        };
}
Decrementar(){
        this.setState({ // funcao que esta associada ao estado, e ela configura o estado.
            contador: this.state.contador - 1  // ou seja, do estado contador, ele vai subtrair
        });
    };
Incrementar(){
    this.setState({ // funcao que esta associada ao estado, e ela configura o estado.
            contador: this.state.contador + 1  // ou seja, do estado contador, ele vai somar.
    });
};
    render() {
        return (
            <View> 
            <View style={styles.texto}>
              <Text>{this.state.contador}</Text>
            </View>
            <View style={styles.botoes}>
              <Button
                style={styles.botao1}
                title="Aumenta"
                onPress={this.Incrementar.bind(this)}
              />
              <Button
                style={styles.botao2}
                onPress={this.Decrementar.bind(this)}
                title="Diminui"/>
                  </View>
             </View>
        );
    }
}
const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf:'center',
        top:300,
        height:45,
    },
    texto:{
        alignItems:'center',
        top:200,
    },
});
            
    