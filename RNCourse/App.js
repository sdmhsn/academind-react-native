import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 50,
      flexDirection: 'column',
      width: '80%',
      height: 300,
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextInput>1</TextInput>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput>2</TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput>3</TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
