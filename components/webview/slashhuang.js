import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';

import React,{
    View,
    WebView,
    Component,
    StyleSheet,
    PropTypes,
    ProgressViewIOS//进度条
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            progress:0,
            loaded:false,
            hideProgress:false
        }
    }
    static defaultProps={
        url:'http://slashhuang.github.io/',//默认加载我的博客哈
    };
    static propTypes={
        url:PropTypes.string
    };
    getProgress(offset) {
        //通过某种方式让progress递增至π/2
        var progress = this.state.progress + offset;
        //这种函数逼近，让状态条显示更逼真
        var calculateLimitation = Math.sin(progress/(progress+150)*(Math.PI/2))%1
        return calculateLimitation
    }
    updateProgress() {
        var progress = this.state.progress + 1;
        //触发progress重新渲染
        this.setState({ progress });
        //推至下个进程调用progress^_^
        if(!this.state.loaded){
            this.requestAnimationFrame(() => this.updateProgress());
        }else{
            this.setState({ progress:100000000 });
            this.setTimeout(()=>{
                this.requestAnimationFrame(() => {
                    this.setState({hideProgress:true})
                });
            },500)
        }
    }
    hideProgressBar(){
        this.setState({
                loaded:true
            })
    }
    componentDidMount() {
        this.updateProgress();
    }
    renderWebViewProgressBar(){
       if(this.state.hideProgress){
           return null
       }else{
           return  <ProgressViewIOS  progress={this.getProgress(0)}/>
       }

    }
    render(){
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    title={'黄先生的个人博客'}
                    IsBackText={true}
                    statusbarPadding={true}
                    backFunc = {()=>{this.props.navigator.pop()}}
                    backName={'首页'}
                    actionIcon={true}
                    barBottomThickness={0}/>
                <View style={webViewStyles.progressBar}>
                    {this.renderWebViewProgressBar.call(this)}
                </View>
                <WebView
                    onLoad={this.hideProgressBar.bind(this)}
                    source={{uri: this.props.url}}/>
            </View>
        )
    }
}
//增加timer mixin
Object.assign(Blog.prototype,TimerMixin);

let webViewStyles = StyleSheet.create({
    progressBar:{
        position:'absolute',
        height:2,
        left:0,
        right:0,
        top:62
    }
});