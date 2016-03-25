/**
 * Created by slashhuang on 16/3/24.
 * 展示demo细节
 */
import React,{
    View,
    Text,
    Component,
    PropTypes
} from 'react-native'
/**
 * 导航条,组件展示类是经过参数传递进来的
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
                    backName={`组件列表`}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                <View style={{flex:1}}>
                    {this.props.targetComponent}
                </View>
            </View>
        );
    }
}