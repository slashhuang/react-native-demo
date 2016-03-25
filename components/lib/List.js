/**
 * Created by slashhuang on 16/3/24.
 */

import React,
{
    View,
    Text,
    StyleSheet,
    Component,
    PropTypes,
    PixelRatio,
    TouchableHighlight
} from 'react-native';

export default class List extends Component{
    constructor(props){
      super(props);
    }
    static defaultProps={
        title:'',
        touchCallback:function(){},
        disabled:false,
        underlayColor: '#aaa',
    };
    static PropTypes={
        /**
         * 列表主题
         */
        title:PropTypes.string,
        /**
         * 点按回调函数
         */
        touchCallback:PropTypes.func,
        /**
         * 是否不允许点击
         */
        disabled:PropTypes.bool,
        /**
         * 点按的背景色
         */
        underlayColor:PropTypes.string,
    };
    render(){
        return (
            <TouchableHighlight onPress={this.props.touchCallback}
                                underlayColor={this.props.underlayColor}
                                disabled={this.props.disabled}
                >
                <View style={listStyles.list_item}>
                    <Text style={listStyles.list_text}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
var listStyles = StyleSheet.create({
    list_item:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        borderBottomWidth:1/PixelRatio.get(),//set to min boder
        borderBottomColor:'#ddd'
    },
    list_text:{
      fontSize:16
    }
});