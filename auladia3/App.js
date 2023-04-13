
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InputTexto from './components/InputTexto'
import Botao from './components/Botao'


export default function App() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <InputTexto placeholder={'Username'}/>
      <InputTexto placeholder={'Email'}/>
      <InputTexto placeholder={'Senha'}/>
      <Botao label={'Enviar'}/>
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
         alignItems: 'center',
        justifyContent: 'center',
         },
  titulo: {
    fontFamily: 'verdana',
    fontSize: 25,
    color: '#0E798C',
  }
});
