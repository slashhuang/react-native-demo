'use strict'
import React from 'react-native'
var {
    StyleSheet,
    View,
    Component,
    Animated,//动画组件用来创造流畅、强大、并且易于构建和维护的动画。把它绑定到组件的一个或多个样式属性上。然后可以通过动画驱动它
    Image,
    TouchableHighlight,
    Text
    } = React;
/**
 * Animation本质上就是样式，完全可以参照css3的学习方式。
 * React Native动画默认提供了基础的一些效果，例如spring中的tension等。
 * 在写UI界面的时候，基本可以将注意点放在transform数组里面。
 * 样式自动在绑定的数值发生变化时候，进行帧的渲染。
 */
class AnimationDemo extends Component {
    constructor (...args) {
        super(...args)
        this.state = ({
            isPlaying: true,
            fadeAnimLogo: new Animated.Value(0), // 设置动画初始值，生成Value对象
            fadeAnimText0: new Animated.Value(0),
            fadeAnimText1: new Animated.Value(0),
            fadeAnimLayout: new Animated.Value(1),
            animtext:new Animated.Value(1)
        })
    }
    componentDidMount () {
        let timing = Animated.timing;
        //序列化动画
        Animated.sequence([
            timing(this.state.fadeAnimLogo, {
                toValue: 1,
                duration: 800
            }),
            timing(this.state.fadeAnimText0, {
                toValue: 1,
                duration: 800
            }),
            timing(this.state.fadeAnimText1, {
                toValue: 1,
                duration: 800
            }),
            Animated.spring(this.state.animtext, {
                //它会在toValue值更新的同时跟踪当前的速度状态，以确保动画连贯
                toValue: 0,   // Returns to the start
                velocity: 3,  // Velocity makes it move
                tension: -10, // Slow
                friction: 1,  // Oscillate a lot
            })

        ]).start(() => {
            setTimeout(() =>{
                this.setState({isPlaying:false})
                this._hideWelcome();
            } , 0);
        });

    }

    _hideWelcome () {
        if (this.state.isPlaying) {
            return
        }
        /**
         * 添加Animated属性的UI类会不断监听数据变化，并刷新界面
         * 把动画数值绑定到属性上，然后在每帧去执行原生更新
         */
        Animated.timing(
            this.state.fadeAnimLayout,
            {
                toValue: 0.8,
                duration: 1000
            }).start()
    }

    render () {
        return (
            <View style={styles.content} >
                {this._welcome()}
            </View>
        )
    }

    _welcome () {
        return (
            <Animated.View style={[styles.indicatorWrapper,
                                  {opacity: this.state.fadeAnimLayout}]}>
                <Animated.View//绑定视图
                    style={{
                    flex:5,
                    opacity: this.state.fadeAnimLogo, // Binds directly
                    justifyContent:'center',
                    alignItems: 'center',
                    transform: [{
                    translateX: this.state.fadeAnimLogo.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-80, 0]
              })}]}}>
                    <Image source={{uri:'https://avatars1.githubusercontent.com/u/17541275?v=3&s=200'}} style={{width: 120, height: 120}}/>
                    <Image source={{uri:'http://shanxi.sinaimg.cn/2013/0131/U9250P1196DT20130131163100.jpg'}} style={{width: 120, height: 120}}/>
                </Animated.View>
                <View style={{flex:2}}>
                    <Animated.View
                        style={{
                    opacity: this.state.fadeAnimText0,
                    height:40,
                    transform: [{
                    translateX: this.state.fadeAnimText0.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 40]})}]}}>
                        <Text style={styles.footerText}>Supported by: future-team</Text>
                    </Animated.View>

                    <Animated.View
                        style={{
                        opacity: this.state.fadeAnimText1,
                        flex:1,
                        transform: [{
                        translateX: this.state.fadeAnimText1.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 40]})}]}}>
                        <Text style={styles.footerText}>written by: slashHuang</Text>
                    </Animated.View>
                </View>
                <Animated.View
                    style={[
                    {   backgroundColor:'#fff',
                        height:50,
                        justifyContent:'center',
                        alignItems:'center'
                        },
                    {
                        transform: [   // Array order matters
                            {scale: this.state.animtext.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 2],
                             })},
                            {translateX: this.state.animtext.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 300],
                                    })},
                            {rotate: this.state.animtext.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                    '0deg', '180deg' // 'deg' or 'rad'
                            ]})}]
                  }
            ]}>
                    <Text style={styles.footerText}>{this.state.isPlaying?'我动了':'我动完了'}!</Text>
                </Animated.View>
            </Animated.View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        backgroundColor: '#eee',
        flex: 1
    },
    indicatorWrapper: {
        flex: 1,
        backgroundColor:'black'
    },
    footerText: {
        color: '#aaaaaa',
        fontSize: 22
    }
});

export default AnimationDemo
