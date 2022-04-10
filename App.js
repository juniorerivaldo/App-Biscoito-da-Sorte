import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));

  const [frase, setFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  ];

  function quebraBiscoito () {
    
    setImg(require('./src/biscoitoAberto.png'));

    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setFrase(frases[ numeroAleatorio ]);

  }

  function resetBiscoito() {
    setImg(require('./src/biscoito.png'));
    setFrase('');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />

      <Text style={ styles.textoFrase }>{ frase }</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, {marginTop: 20, borderColor: '#121212'}]}
        onPress={resetBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 250,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 20,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
