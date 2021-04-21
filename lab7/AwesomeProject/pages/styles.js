import {StyleSheet} from 'react-native';

const stylesHome = StyleSheet.create({
    text: {
      color: '#111825',
      textAlign:'center',
      fontFamily:'Roboto-Regular'
    },
    parentContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
    },
    items:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#0486DB',
        color: '#ffffff',
        width:'100%',
        height:'16%',
        marginVertical:'2%',
        justifyContent:'center'
      },
      text: {
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontFamily:'Roboto-Regular',
      },
});

export const btn = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#0486DB',
      color: '#ffffff',
      height:40,
      marginHorizontal:'3%',
      marginVertical:'1.5%',
      justifyContent:'center'
    },
    text: {
      color:'white',
      textAlign:'center',
      fontSize:18,
      fontFamily:'Roboto-Regular',
    },
});

export const textInput = StyleSheet.create({
    input:{
        marginHorizontal:'3%',
        marginVertical:'1.5%',
        backgroundColor:'white',
        fontFamily:'Roboto-Regular'
    } ,

    output:{
        backgroundColor:'#0486DB',
        marginHorizontal:'3%',
        marginVertical:'1.5%',
        padding:'2%',
        
    },

    color:{
        color:'white',
    },
});

export const defaultBG = StyleSheet.create({
    bg:{
        backgroundColor:'#05ACD3'
    }
})

export default stylesHome