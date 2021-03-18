import {StyleSheet} from 'react-native';

const stylesHome = StyleSheet.create({
    containerCol: {
      flex: 1,
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column',
      backgroundColor:'white',
      color:'black',
    },

    colItems:{
        //alignSelf:'stretch',
        width:'90%',
        alignItems:'center',
        borderRadius:200,
        justifyContent:'center',
        height:120,
        backgroundColor:'#fa0',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

export const listStyles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "column",
    paddingTop: 15
  },
  item: {
    marginHorizontal:10,
    marginVertical:5,
    paddingHorizontal:10,
    paddingVertical:5,
    color: "#fff",
    fontFamily:'Roboto-Medium',
    fontSize:16,
    backgroundColor: "#0892D0",
    textAlign: "center"
  },

  buttonContainer:{
    flex: 2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:2,
  },

  buttons:{
    width:'30%',
    marginHorizontal:'3.33%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0892D0',
    height:80,
    borderRadius:20,
  },

  descriptionText:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'white',
    fontSize:20,
    fontFamily:'AkayaTelivigala-Regular',
  },

})
export default stylesHome