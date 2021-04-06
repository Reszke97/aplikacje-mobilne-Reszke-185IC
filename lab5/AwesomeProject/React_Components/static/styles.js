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

export const ScrollView2Styles = (props)=> StyleSheet.create({
  ParentItem:{
    height:100,
    width:'90%',
    backgroundColor:`rgb(${props})`,
    alignItems:'center',
    justifyContent:'center'
  },

  ChildItem:{
    height:50,
    width:'50%',
    backgroundColor:`rgb(${props})`,
  }
});

export const ScrollViewContainerStyles = StyleSheet.create({
  ScrollViewContainer:{
    alignContent:'center',
    flexDirection: 'column',
    display:'flex',
    alignItems:'center',
  },

  Padding:{
    padding:'3.5%',
    fontFamily:'AkayaTelivigala-Regular',
    fontSize:18,
    textAlign:'justify',
  },

  PaddingLowerFontSize:{
    padding:'3.5%',
    fontFamily:'AkayaTelivigala-Regular',
    fontSize:16,
    textAlign:'justify',
  },

  paddingTop:{
    paddingTop:'2%',
    fontFamily:'Roboto-Regular',
    fontSize:22,
  },

  headerText:{
    fontFamily:'Roboto-Regular',
    fontSize:22,
  },

  buttons:{
    marginBottom:'3%',
    paddingHorizontal:'1.5%',
    marginHorizontal:'1%',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:20,

  },

  fontFamily:{
    fontFamily:'SourceSerifPro-Regular',
  },
})

export const SwiperinoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },

});

export default stylesHome