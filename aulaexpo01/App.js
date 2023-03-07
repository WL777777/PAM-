import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <AssetExample />
      <Text>AMÉM AMÉM AMÉM </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
