/**
 * Created by slashhuang on 16/3/25.
 */
import React,{
    Component,
    TextInput,
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';
/**
 * 最低像素值iphone 6模拟器上
 * //0.5
 */
const minPix = 1/PixelRatio.get()
console.log(minPix);
export default class TextInputDemo extends Component{
    constructor(props){
       super(props);
        this.state={
            text:'hell world'
        }
    }
    render(){
       return (
           <View style={TextInputStyle.container}>
               <View  style={TextInputStyle.textInput}>
                   <TextInput  onChangeText={(text) => this.setState({text})}
                               value={this.state.text}/>
               </View>
               <View style={TextInputStyle.searchBtn}>
                   <Text style={TextInputStyle.text}>
                       搜索
                   </Text>
               </View>

           </View>
       )
    }
}
/**
 * 一部分CSS的经验是，布局样式都加在View组件上
 * 1、即使是TextInput支持margin布局，也会由于react-native内部封装的东西导致位置不精确
 * 2、样式编写要按照标签特性进行归类，保证UI的正确渲染
 */
const TextInputStyle= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:30,
        flexDirection:'row',
        marginHorizontal:5
    },
    textInput:{
        height: 30,
        flex:1,
        borderColor: 'gray',
        borderWidth: minPix,
        marginTop:5,
        paddingHorizontal:3
    },
    searchBtn:{
        marginTop:5,
        marginLeft:-10,
        width:50,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'deepskyblue'
    },
    text:{
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }
});