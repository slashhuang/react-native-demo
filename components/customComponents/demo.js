/**
 * Created by slashhuang on 16/3/24.
 * 展示demo页面
 */
import React,{
    View,
    Text,
    Component,
    PropTypes
} from 'react-native'
/**
 * 导航条
 */
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条

export default class DemoView extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    static PropTypes={
        targetComponent:PropTypes.func.isRequired
    };
    render(){
        return(
            <View>
                <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={this.backNavName}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                <View style={{flex:1}}>
                    {this.props.targetComponent}
                </View>
            </View>
        );
    }
}