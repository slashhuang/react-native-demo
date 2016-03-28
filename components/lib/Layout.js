/**
 * Created by slashhuang on 16/3/24.
 * 布局layout
 */

import React,
{
    View,
    Text,
    ScrollView,
    StyleSheet,
    Component,
    PropTypes,
    PixelRatio,
    TouchableHighlight
} from 'react-native';

export default class LayoutExample extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
    };
    static PropTypes={
    };
    renderContent(){
        var word = 'FE futureTeam in dianping.com';
       return <Text style={layoutStyles.text}>{word.split('').reduce(function (pre,cur) {
           return pre+'\n'+word;
       },'')} </Text>
    }
    render(){
        return (
            <View style={layoutStyles.flex}>
                <ScrollView contentContainerStyle={[layoutStyles.flex]}
                            contentInset={{bottom:40}}
                    >
                    {this.renderContent()}
                </ScrollView>

                 <View style={layoutStyles.tabbar}>
                 <Text style={layoutStyles.text}>模拟前端界面停留底部</Text>
                 </View>


            </View>
        );
    }
}
var layoutStyles = StyleSheet.create({
    flex:{
        flex:1
    },
    tabbar:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'oldlace'
    },
    text:{
        fontSize:16,
        textAlign:'center',
    }
});