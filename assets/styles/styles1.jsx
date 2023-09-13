import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    texts:{
      color:'red',
      fontSize:22
    },
    tInputs:{
      padding:10,
      textAlign:'center', 
      borderRadius:10, 
      borderWidth:2, 
      borderColor:'green'
    }

  });

  const myimage = StyleSheet.create({
    images:{
        width:'50%',
        height:'100%'
    }
  })

  export {styles, myimage}