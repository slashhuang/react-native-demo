/**
 * Created by slashhuang on 16/3/22.
 */
import React,{
    View,
    Component,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

//引入博客webview
import Blog from './webview/slashhuang.js';
//引入自定义的IOS组件界面
import CustomComponents from './customComponents/demoList.js';

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    jumpToWebWiew(){
        /**
         * @ TODO 改变navigation title颜色
         */
       this.props.navigator.push({
            component:Blog,
            url:'http://slashhuang.github.io'
        })
    }
    jumpToCustomItems(){
       this.props.navigator.push({
           component:CustomComponents,
           title:'查看自定义IOS组件'
       })

    }
    longPress(){
        alert('simulate longPress')
    }
    /**
     * resizeMode只有contain cover stretch
     * @return {XML}
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={{uri:'http://imga1.pic21.com/bizhi/140226/07916/s04.jpg'}}
                           style={styles.image}
                           resizeMode={Image.resizeMode.cover}
                        />
                    <View style={styles.composerView}>
                        <Text style={styles.author}>作者:slashhuang</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.idioms}>
                        <Text style={styles.personalText}>我的世界太过安静， 静得可以听见自己心跳的声音。
                            心房的血液慢慢流回心室， 如此这般的轮回。
                            聪明的人，喜欢猜心 ，也许猜对了别人的心 ，却也失去了自己的 。
                            傻气的人，喜欢给心 ，也许会被人骗 ，却未必能得到别人的 。
                            你以为我刀枪不入， 我以为你百毒不侵。</Text>
                        <Text style={styles.dateAuthor}>作者:徐志摩</Text>
                    </View>
                    <TouchableHighlight style={styles.touchHighLight}
                                        underlayColor={'#222'}//触摸操作，显示的底层颜色
                                        delayLongPress={1000}//延迟长按相应时间
                                        onPress={this.jumpToWebWiew.bind(this)}
                                        onLongPress={this.longPress}
                        >
                        <View>
                            <Text style={styles.toHistory}>查看作者其他博客</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchHighLight}
                                        underlayColor={'#222'}//触摸操作，显示的底层颜色
                                        delayLongPress={1000}//延迟长按相应时间
                                        onPress={this.jumpToCustomItems.bind(this)}
                                        onLongPress={this.longPress}
                        >
                        <View>
                            <Text style={styles.toHistory}>查看IOS组件</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};
/**
 * 心得1:flexDirection在react-native中默认是垂直布局的
 */
var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    headerWrapper:{
        flex:5,
        backgroundColor:'#ddd'
    },
    content:{
      flex:5,
        backgroundColor:'#000'
    },
    image:{
        flex:1
    },
    composerView:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:20,
        backgroundColor:'#000',
        opacity:0.5,
        alignItems:'center'
    },
    author:{
        position:'absolute',
        right:20,
        marginTop:4,
        fontSize:12,
        color:'#fff'
    },
    idioms:{
        flex:3,
        paddingLeft:10,
        paddingRight:10,
        marginTop:17,
        marginBottom:17,
        backgroundColor: '#434243',
        alignItems: 'center',
        justifyContent: 'center',
    },
    personalText:{
        color:'#fff',
        fontSize:14,
        lineHeight:17
    },
    dateAuthor: {
        fontSize: 14,
        color: 'white',
        position: 'absolute',
        left: 10,
        bottom: 18
    },
    touchHighLight:{
        flex:1,
        marginBottom:17,
        backgroundColor: '#434243',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toHistory: {
        fontSize: 14,
        color: 'white'
    }
});
export default HomePage;
