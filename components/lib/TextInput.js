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
    renderType(props){
        return(
            <View style={TextInputStyle.container}>
                <View  style={{flex:1}}>
                    <TextInput  style={TextInputStyle.textInput}
                                {...props}

                        />
                </View>
                <View style={TextInputStyle.searchBtn}>
                    <Text style={TextInputStyle.text}>
                        {props.keyboardType}
                    </Text>
                </View>
            </View>)

    }
    render(){
       return (
           <View>
               {this.renderType({
                   keyboardType:'numeric',
                   returnKeyType:'default',
                   autoFocus:true,
                   maxLength:10,
                   placeholder:"自动聚焦，默认UI展现",
                   onChangeText:(text)=>{
                       //参数为text
                       if(text.length>5){
                           alert(`length has already pass 5,text is ${ text }`)
                       }}
               })}
               {this.renderType({
                       accessibilityLabel:`Write a status update`,
                       keyboardType:'phone-pad',
                       returnKeyType:'send',
                       keyboardAppearance:'light',
                       placeholder:"选择输入的文字颜色",
                       placeholderTextColor:'green',
                       selectionColor:'green',
                       onSubmitEditing:()=>{
                           alert('submit')
                       }
                   }
               )}
               {this.renderType({
                       keyboardType:'default',
                       returnKeyType:'go',
                       placeholder:"键盘下为go，选择文本操作",
                       placeholderTextColor:'lightcoral',
                       onFocus:(e)=>{
                           console.log(e);
                           alert('focused')
                       }
                   }
               )}
               {this.renderType({
                       keyboardType:'default',
                       returnKeyType:'search',
                       keyboardAppearance:'dark',
                       placeholder:"改变键盘样式",
                       placeholderTextColor:'peru'
                   }
               )}
               {this.renderType({
                       keyboardType:'email-address',
                       returnKeyType:'next',
                       keyboardAppearance:'dark',
                       placeholder:"不可编辑",
                       placeholderTextColor:'lightslategray',
                       editable:false
                   }
               )}
           </View>
       )
    }
}
/**
 * 一部分CSS的经验是，布局样式都加在View组件上
 * 1、TextInput支持margin布局，由于是封装的原生的。所以必须给予容器一定的宽度。
 *   浏览器中原生的input默认会有一定的宽度，但是TextInput是没有的，需要手动添加。
 * 2、样式编写要按照标签特性进行归类，保证UI的正确渲染
 */
const TextInputStyle= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:30,
        flexDirection:'row',
        margin:5
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
        width:100,
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