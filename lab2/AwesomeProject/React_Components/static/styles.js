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
        justifyContent:'center',
        height:120,
        backgroundColor:'gray',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

export const stylesOtherScreens = StyleSheet.create({
  containerCol: {
    flex: 1,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'white',
    color:'black',
    paddingTop:'5%'
  },

  colTextHookUseState:{
      width:'90%',
      alignItems:'center',
      //justifyContent:'center',
      backgroundColor:'#0892D0',
      flex:8,
  },

  colTextRestParams:{
    width:'90%',
    alignItems:'center',
    flex:8,
    borderWidth:2,
    borderColor:'#0892D0',
    borderRadius:20
  },

  textSpreadOp:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'white',
  },

  colTextSpreadOp:{
    width:'90%',
    alignItems:'center',
    flex:8,
    backgroundColor:'black'
  },

  codeBlockSpreadOp:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:14,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'#0892D0',
    borderColor:'gray',
    borderRadius:30
  },

  textRestParameters:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'black',
  },

  textHookUseState:{
    marginHorizontal:'5%',
    marginTop:'2.5%',
    fontSize:17,
    fontFamily:'Roboto-Medium',
    color:'white',
  },

  codeBlockHookUseState:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:13,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'gray',
    borderColor:'gray'
  },

  codeBlockRestParams:{
    marginHorizontal:'5%',
    paddingHorizontal:'5%',
    paddingVertical:'2.5%',
    marginTop:'2.5%',
    fontSize:20.5,
    fontFamily:'SourceSerifPro-Regular',
    color:'white',
    backgroundColor:'gray',
    borderColor:'gray'
  },

  descriptionText:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'white',
    fontSize:20,
    fontFamily:'AkayaTelivigala-Regular',
  },

  rowNavContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:2,
  },

  rowNav:{
    width:'40%',
    marginHorizontal:'5%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0892D0',
    height:80,
  }
})
export default stylesHome