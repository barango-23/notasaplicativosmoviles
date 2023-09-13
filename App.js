import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, ImageBackground} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import { styles, myimage } from './assets/styles/styles1'
import Notas from './components/formulario';
export default function App() {
 

  let mimage= "uni.jpg"
  return (
    <ImageBackground
    source={require('./assets/images/uni.jpg')}
    style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
  >
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
    <Notas></Notas>
    </View>
  )
    </ImageBackground>
  ) }





