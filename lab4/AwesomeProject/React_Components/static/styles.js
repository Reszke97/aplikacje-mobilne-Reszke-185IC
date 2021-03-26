import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

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
        height:100,
        backgroundColor:'#fa0',
    },

    text:{
      color:'white',
      fontSize:25,
      fontFamily:'AkayaTelivigala-Regular',
    }
})

export const dateTime = StyleSheet.create({
  container:{
    marginVertical:'3%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },

  touchOpac:{
    width:'40%',
    padding:6,
    borderRadius:15,
    backgroundColor:'#0892D0',
    
  },

  text:{
    fontFamily:'Roboto-Black',
    fontSize:18,
    textAlign:'center',
    color:'white',
  },

  textOutput:{
    fontFamily:'Roboto-Regular',
    fontSize:27,
    textAlign:'center',
    color:'chocolate',
  },

  description:{
    fontFamily:'Roboto-Regular',
    fontSize:18,
    textAlign:'center',
    color:'#0892D0',
    padding:'2.5%'
  },

})

export const stylesTextInput = StyleSheet.create({
  input: {
    borderWidth: 1,
    height:'12%',
    margin:'2.5%',
    padding:'2.5%',
    backgroundColor:'white',
    borderRadius:5,
    color:'#0892D0',
    fontFamily:'Roboto-Regular'
    
  },
  container: {
    display:'flex',
    justifyContent:'space-evenly',
    flex:1,
  },
});

export const stylesSelect =StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical:20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "ghostwhite"
  },

  pickerHeight: {
    height: 300
  },

  pickerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "white",
    padding: 6,
    height: 240
  },

  pickerLabel: {

    fontSize: 19,
    fontWeight: "bold"
  },

  picker: {
    width: 100,
    backgroundColor: "white"
  },

  selection: {
    width: 200,
    marginTop: 100,
    textAlign: "center"
  },

  text:{
    width:390,
    textAlign:'center',
    paddingVertical:20,
    fontFamily:'Roboto-Medium',
    fontSize:20,
    color:'#0892D0',
    borderWidth:1,
    borderColor:'#0892D0',
    borderRadius:20,
  }
});

export const SwitchComp = StyleSheet.create({

  text:{
    fontFamily:'Roboto-Regular',
    color:'#0892D0',
    fontSize:20,
  },

  output:{
    fontFamily:'Roboto-Regular',
    color:'#0892D0',
    fontSize:100,
  },

  outputContainer:{
    flexDirection:'column',
    display:'flex',
    backgroundColor:'gray',
    flex:9,alignItems:'center',
    justifyContent:'center',
  },



  container:{
    paddingTop:'2.5%',
    display:'flex',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'baseline'
  },

  items:{
    
  },

  containerModal:{
    marginTop:56,
    flex:1,
    backgroundColor:'white',
  },

  containerModalWrapper:{
    paddingTop:'2.5%',
    display:'flex',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'baseline'
  }

});
export default stylesHome