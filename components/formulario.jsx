import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../assets/styles/styles1';


export default function Notas(){
    const [identificacion, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [asignatura, setMateria] = useState('');
  const [momento1, setMomento1] = useState('');
  const [momento2, setMomento2] = useState('');
  const [momento3, setMomento3] = useState('');
  const [definitiva, setDef] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [color_ob, setColor] = useState('');
  const [datos, setDatos] = useState([]);
  
  const guardarDatos = () => {
    if (identificacion && nombre && asignatura && momento1 && momento2 && momento3 && definitiva && observaciones && color_ob) {
      const nuevoDato = {
        identificacion,
        nombre,
        asignatura,
        momento1,
        momento2,
        momento3,
        definitiva,
        observaciones,
        color_ob,
      };
      setDatos([...datos, nuevoDato]);
      // Limpia los campos después de guardar
      setId('');
      setMateria('');
      setMomento1('');
      setMomento2('');
      setMomento3('');
      setDef('');
      setObservaciones('');
      setColor('');
    } else {
      // Mostrar un mensaje de error si falta algún dato
      setObservaciones('Datos guardados correctamente.');
    }
  };

  const calcularDefinitiva = () => {
    // Convierte las notas a números
    const nota1Numero = parseFloat(momento1);
    const nota2Numero = parseFloat(momento2);
    const nota3Numero = parseFloat(momento3);

    // Verifica que las notas sean números válidos
    if (isNaN(nota1Numero) || isNaN(nota2Numero) || isNaN(nota3Numero)) {
      setDef('Error: Ingresa notas válidas');
      return;
    }

    // Verifica que las notas estén en el rango de 0 a 5
    if (nota1Numero < 0 || nota1Numero > 5 || nota2Numero < 0 || nota2Numero > 5 || nota3Numero < 0 || nota3Numero > 5) {
      setDef('Error: Las notas deben estar en el rango de 0 a 5');
      return;
    }

    // Calcula la definitiva aplicando los pesos
    const definitiva = nota1Numero * 0.3 + nota2Numero * 0.35 + nota3Numero * 0.35;

    setDef(definitiva.toFixed(2)); // Redondea la definitiva a 2 decimales

    // Calcula la observación
    let observacion = '';
    let observacionColor = '';
    if (definitiva >= 3) {
      observacion = 'Bien Hecho..';
      observacionColor = 'green';
    } else if (definitiva < 2) {
      observacion = 'echale mas ganas..';
      observacionColor = 'red';
    } else if (definitiva >= 2 && definitiva < 2.95) {
      observacion = 'Habilita';
      observacionColor = 'orange';
    }

    setObservaciones(observacion);
    setColor(observacionColor);
  };




  const consultarDatos = () => {
    if (datos.length === 0) {
      // Actualiza el estado de obsv con el mensaje
      setObservaciones('No hay datos almacenados.');
    } else {
      // Mostrar los datos en obsv
      let datosConsulta = 'Datos almacenados:\n';
      datos.forEach((datos) => {
        datosConsulta += `ID: ${datos.identificacion},\n Nombre: ${datos.nombre},\n Asignatura: ${datos.asignatura},\n Definitiva: ${datos.definitiva},\n Observacion: ${datos.observaciones}`;
      });
      setObservaciones(datosConsulta);
    }
  };

  const borrarDatos = () => {
    setDatos([]); // Borra todos los datos
    setId("");
    setNombre("");
    setMateria("");
    setMomento1("");
    setMomento2("");
    setMomento3("");
    

    // Actualiza el estado de obsv con el mensaje
    setObservaciones('Datos borrados correctamente.');
  };
  
  return(
    <View style={styles.container}>


        <View style={{ flex: 8, width: '100%', alignItems: 'center', justifyContent: 'center', color:"white", marginTop:20}}>

        <Text style={{fontSize:20, margin:10, color:'violet', fontFamily: 'cursive'}}>Identificacion:</Text>
        
        <TextInput
          label='Digite identificacion'
          onChangeText={identificacion => setId(identificacion)}
          value={identificacion}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="account-check"/>}
          />
        <Text style={{fontSize:20, margin:10, color:'violet', fontFamily: 'cursive'}}>Asignatura:</Text>
        
        <TextInput
          label='Digite Asignatura'
          onChangeText={asignatura => setMateria(asignatura)}
          value={asignatura}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="book-open-variant"/>}
          />

        <Text style={{fontSize:20, margin:10, color:'violet', fontFamily: 'cursive'}}>Nombre</Text>
        <TextInput
          label='Ingrese su nombre'
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="account"/>}
          />


        {
            //Botones
        }
        <View style={{ flexDirection: 'row', paddingTop: 40 , margin: 10}}>
        <Text style={{fontSize:20, marginTop:0, color: 'violet', fontFamily: 'cursive'}}>Nota 1 </Text>
          <TextInput
            label='   '
            onChangeText={momento1 => setMomento1(momento1)}
            value={momento1}
            style={{backgroundColor: 'pink', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric-1"/>}
            />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 , margin: 10}}>
          <Text style={{fontSize:20, marginTop:0, color: 'violet', fontFamily: 'cursive'}}>Nota 2 </Text>
          <TextInput
            label='   '
            onChangeText={momento2 => setMomento2(momento2)}
            value={momento2}
            style={{backgroundColor: 'pink', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric-2"/>}
            />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 , margin: 10}}>
          <Text style={{fontSize:20, marginTop:0, color: 'violet', fontFamily: 'cursive'}}>Nota 3 </Text>
          <TextInput
            label='   '
            onChangeText={momento3 => setMomento3(momento3)}
            value={momento3}
            style={{backgroundColor: 'pink', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric-3"/>}
            />
        </View>



        
        <View style={{ paddingTop: 10}}>
        <text style={{fontSize: 20, color:'violet'}}>Definitiva:</text>
        <text>{definitiva}</text>
        <text style={{paddingTop:10, fontSize:20, color: 'violet'}}>Observaciones:</text>
        </View>

        <View style={{}}>

        <text style={{ fontSize: 30, color: color_ob}}>{observaciones}</text>
        </View>

<View style={{  flexDirection: 'row', marginTop: 10  }}>

        <Button style={{ backgroundColor: 'violet', width: 150, margin: 5 ,  }}  mode="contained" onPress={calcularDefinitiva}>
        Calcular
      </Button>
      <Button style={{ backgroundColor: 'violet', width: 150, margin: 5 }} mode="contained" onPress={guardarDatos}>
        Guardar
      </Button>
</View>

<View style={{  flexDirection: 'row', marginTop: 20  }}>
      <Button style={{ backgroundColor: 'violet', width: 150, margin: 5 }} mode="contained" onPress={consultarDatos}>
        Consultar
      </Button>
      <Button style={{ backgroundColor: 'violet', width: 150, margin: 5 }} mode="contained" onPress={borrarDatos}>
        Borrar
      </Button>
</View>


        </View>
    </View>
  )
}


