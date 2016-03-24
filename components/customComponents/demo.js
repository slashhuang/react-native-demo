/**
 * Created by slashhuang on 16/3/24.
 * 展示demo页面
 */
import React,{
    View,
    Text,
    Component
} from 'react-native'
/**
 * 导航条
 */
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条
/**
 * 组件
 */
import List from '../lib/List.js';//引入列表组件
import SliderGroup from '../lib/Slider.js';//引入图片浏览插件
export default class DemoView extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
        targetComponent:<SliderGroup />
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