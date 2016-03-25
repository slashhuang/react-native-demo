/**
 * Created by slashhuang on 16/3/24.
 */
import React,{
    View,
    Text,
    Component
} from 'react-native'
import DemoView from './demo.js';//demo展示窗口
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条
/**
 * 组件测试
 */
import List from '../lib/List.js';//引入列表组件
import TextInputDemo from '../lib/TextInput.js';//引入输入框组件
import SliderGroup from '../lib/Slider.js';//引入图片浏览插件

export default class CustomComponents extends Component{
    constructor(props){
        super(props);
    }
    passPropsParam(name,RenderComponent){
        this.props.navigator.push({
           component:DemoView,
           backNavName:'查看IOS组件',
           title:name,
           targetComponent:<RenderComponent/>||null
       })
    }
    render(){
        return(
            <View>
                <NavigationBar
                    title={this.props.title}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                <List title='slider'
                      disabled={false}
                      touchCallback={this.passPropsParam.bind(this,'slider',SliderGroup)}/>
                <List title='TextInput'
                      disabled={false}
                      touchCallback={this.passPropsParam.bind(this,'TextInput',TextInputDemo)}
                    />
            </View>
        );
    }
}