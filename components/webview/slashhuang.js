import NavigationBar from '../react-native-navigationbar/lib/index.js';

import React,{
    View,
    WebView,
    Component
} from 'react-native';
export default class Blog extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    title={'黄先生的个人博客'}
                    backIconText={true}
                    statusbarPadding={true}
                    backFunc = {()=>{this.props.navigator.pop()}}
                    backName={'首页'}
                    actionIcon={true}
                    barBottomThickness={0}/>
                <WebView
                    source={{uri: this.props.url}}/>
            </View>
        )
    }

}