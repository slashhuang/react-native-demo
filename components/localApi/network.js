/**
 * Created by slashhuang on 16/3/31.
 */

import React ,{
    Component,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    PixelRatio,
    Image,
    ActivityIndicatorIOS,
    Alert
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
/**
 * RN内置fetch，已经通过标准委员会，并在chrome中内置实现
 */
export default class httpDemo extends Component{
    constructor(){
        super();
        this.state={
            futureTeam:null,
            slashHuang:null
        }
    }
    /**
     * info设计成了state的key
     * @param info
     */
    async getInfo(type){
        const urlPrefix = 'https://api.github.com';
        //由于有type作为key，不必担心闭包引起的变量冲突问题
        // 仅仅针对某个key进行state状态的改变
        let targetState={};
            targetState[type]={};
        let fetchUrl = urlPrefix+'';
        switch (type){
            case 'futureTeam':
                fetchUrl+= '/orgs/future-team';
                break;
            case 'slashHuang':
                fetchUrl+= '/users/slashHuang';
                break;
        }
        targetState[type].loading=true;
        //执行对应条目的loading
        this.setState(targetState);
        /**
         * 模拟网络请求
         */
        this.setTimeout(()=>{
            fetch(fetchUrl,{method: 'GET'})
                .then((response)=>response.json())
                .then((responseText)=> {
                    Object.assign(targetState[type],responseText,{loading:false});
                    this.setState(targetState)})
                .catch((e)=>{
                    Alert.alert('出错了');
                    Object.assign(targetState[type],{loading:false});
                    this.setState(targetState)
                })},500);
    }

    /**
     * 处理加载
     */
    renderLoading(){

      return (<View  style={[httpStyles.container,httpStyles.infoPart,httpStyles.centerStyle]}>
                <ActivityIndicatorIOS size="large" color="#0000ff"/>
                </View>)

    }
    /**
     * 处理信息
     */
    renderDetail(info){

            return (
                <View  style={[httpStyles.container,httpStyles.infoPart,httpStyles.centerStyle]}>
                        <Image source={{uri:info['avatar_url']}}
                               style={{width:80,height:80}}/>
                        <Text style={[httpStyles.textStyle]}>
                            blog地址: {info['blog']}
                        </Text>
                        <Text style={[httpStyles.textStyle]}>
                            location地址: {info['location']||''}
                        </Text>
                        <Text style={[httpStyles.textStyle]}>
                            开源项目数: {info['public_repos']||''}
                        </Text>
                </View>)
    }
    renderInfo(type){
        let info=this.state[type];
        //键值大于1表明有信息返回
        let infoReady = info && Object.keys(info).length>1;
        let renderLoading =info && info.loading?this.renderLoading():null;
        return (
            <View style={httpStyles.container}>
                <TouchableOpacity onPress={this.getInfo.bind(this,type)}
                                  style={[httpStyles.clickPart]}
                    >
                    <Text style={[httpStyles.textStyle]}>
                        点击获取{type}的信息
                    </Text>
                </TouchableOpacity>
                {/*
                    优先渲染info,其次才在界面上显示加载图标
                */}
                {infoReady?this.renderDetail(info):renderLoading}
            </View>
        )
    }
    render(){
        return (
            <View style={httpStyles.container}>
                { this.renderInfo.call(this,'futureTeam')}
                { this.renderInfo.call(this,'slashHuang')}
            </View>)
    }
}
/**
 * 自动在component unmount的时候，去除time操作
 */
Object.assign(httpDemo.prototype,TimerMixin);

let httpStyles= StyleSheet.create({
    container:{
        flex:1
    },
    centerStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    clickPart:{
        height:40,
        borderTopColor:'#ddd',
        borderTopWidth:1/PixelRatio.get(),
        borderBottomColor:'#ddd',
        borderBottomWidth:1/PixelRatio.get(),
        justifyContent:'center',
        alignItems:'center'
    },
    infoPart:{
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'aliceblue'
    },
    textStyle:{
        fontSize:16,
        lineHeight:20,
        textShadowColor:'dimgray'
    }
});