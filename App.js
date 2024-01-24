import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  const showAlert = () => {
    Alert.alert('Hello', 'Syötit tekstin: ' + message);
  }
  
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <TextInput 
        placeholder = "syötä teksti"
        onChangeText= {text => setMessage(text)}
      />
      <Button title="Press me" onPress={showAlert} color = "purple"/>
      <StatusBar style="auto" />
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
});
