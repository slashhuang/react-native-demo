/**
 * Created by slashhuang on 16/4/5.
 */
import React,{
    NetInfo,
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    PixelRatio,
    Component
} from 'react-native';
var TimerMixin = require('react-timer-mixin');

export default class NetInfoDemo extends Component{
    constructor(){
        super();
        this.state={
            info:'',
            isConnected:false
        }
    }
    handleConnectivityChange(reach) {
       this.setState({
           info:reach
       })
    }
    handleConnecChange(reach) {
        this.setTimeout(
            ()=>{
                this.setState({
                    isConnected:reach
                })
            } ,200
        )
    }

    /**
     * none - 设备处于离线状态。
     * wifi - 设备处于联网状态且通过wifi链接，或者是一个iOS的模拟器。
     * cell - 设备是通过Edge、3G、WiMax或是LTE网络联网的。
     * unknown - 发生错误，网络状况不可知
     */
    fetchNetInfo(){
        NetInfo.fetch().done((reach) => {
            /**
             * 事实上，this的指向没有变
             */
            this.setState({
                info:reach
            })
        });
    }
    componentDidMount(){
        /**
         * 是否联网
         */
        NetInfo.isConnected.fetch().done((isConnected) => {
           this.setState({isConnected:isConnected});
        });
        /**
         *  添加onchange事件
         */
        NetInfo.addEventListener(
            'change',
            this.handleConnectivityChange.bind(this)
        );
        NetInfo.isConnected.addEventListener(
            'change',
            this.handleConnecChange.bind(this)
        );
    }
    render(){
       return (
           <View style={{flex:1}}>
               <TouchableHighlight
                   underlayColor={'floralwhite'}
                   style={[netInfoStyle.clickPart]}
                   onPress={this.fetchNetInfo.bind(this)}
                   >
                   <Text style={[netInfoStyle.text,{color:'indigo'}]} >点击获取当前网络信息</Text>
               </TouchableHighlight>
               <View style={[netInfoStyle.clickPart,
                                {backgroundColor:this.state.isConnected?'deepskyblue':'lightgray'}]}>
                   <Text style={netInfoStyle.text}>
                       联网状态:{this.state.isConnected?'已联网':'无网络'}
                   </Text>
               </View>
               <View style={netInfoStyle.clickPart}>
                   <Text style={netInfoStyle.text}>目前的网络类型是</Text>
               </View>
               <View style={netInfoStyle.clickPart}>
                   <Text style={netInfoStyle.text}>{this.state.info}</Text>
               </View>
               <View style={[netInfoStyle.center]}>
                   <Text style={[netInfoStyle.text,{
                  color:'red'
                }]}>toggle网络开关进行测试</Text>
               </View>
           </View>
           )

    }
}
Object.assign(NetInfoDemo.prototype,TimerMixin);

var netInfoStyle=StyleSheet.create({
    clickPart:{
        height:40,
        borderTopColor:'#ddd',
        borderTopWidth:1/PixelRatio.get(),
        borderBottomColor:'#ddd',
        borderBottomWidth:1/PixelRatio.get(),
        justifyContent:'center',
        alignItems:'center'
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
        height:40,
        marginHorizontal:70,
        marginTop:80,
        borderBottomColor:'tomato',
        borderBottomWidth:1/PixelRatio.get(),
    },
    text:{
        fontSize:17
    }
});
