import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');

  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    

    if (imc < 18.6) {
      alert('Você está abaixo do peso: ' + imc.toFixed(1));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Você está no peso ideal: ' + imc.toFixed(1));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do peso: ' + imc.toFixed(1));
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMC</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      color='#000'
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (cm)"
      keyboardType="numeric"
      color='#000'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title:{
    textAlign: 'center',
    color: '#ff0000',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 70,
    marginBottom: 80,
  },

  input:{
    backgroundColor: '#FFF',
    width: 380,
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: '#FFF',
    fontSize: 23,
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 380,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#ff0000',
    padding: 10
  },

  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
}); 