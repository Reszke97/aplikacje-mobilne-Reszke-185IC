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
        height:80,
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

export const ImgsStyles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%'
  },
  items:{
    width:'100%',
    height:'50%'
  },
  img:{
    width: '100%',
    height:'100%',
    resizeMode:'center',
  },
  imgHeader:{
    position: 'absolute',
    fontSize: 23,
    alignSelf: 'center',
    fontFamily:'AkayaTelivigala-Regular',
    color:'chocolate'
  },
})

export const ImgSlider = (props)=> StyleSheet.create({
  img:{
    width: 400,
    height:360,
    resizeMode:'center',
    transform: [{ scale: props}],
  },

})

export const DetectConnection = StyleSheet.create({
  parentContainer:{
    display:'flex',
    flex:1,
    alignContent:'center',
    alignItems:'flex-start',
  },
  items:{
    margin:'1%',
    paddingVertical:'2%',
    paddingHorizontal:'2%',
    width:'98%',
    backgroundColor: '#0892D0',
  },
  text:{
    fontFamily:'Roboto-Black',
    color:'white',
    fontSize:18
  }
})

export const SynchStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});

export const AsyncStor = StyleSheet.create({
  input:{
    color:'white'
  },

  itemContainer:{
    flexDirection: 'row',
    paddingHorizontal:'1%',
    marginHorizontal:'2%',
    marginVertical:'1%',
    backgroundColor:'#0892D0'
  },

  button:{
    width:'29.33%',
    alignItems:'center',
    marginHorizontal:'2%',
    backgroundColor:'#0892D0',
    height:50,justifyContent:'center',
    borderRadius:20,
  },

  buttonText:{
    color:'white',
    fontSize:16,
    fontFamily:'Roboto-Regular'
  }
})

export default stylesHome