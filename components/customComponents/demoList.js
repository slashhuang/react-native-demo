/**
 * Created by slashhuang on 16/3/24.
 * demo入口
 */
import React,{
    View,
    Text,
    Component
} from 'react-native'
import DemoView from './demoDetail.js';//demo展示窗口
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条
/**
 * 组件测试
 */
import List from '../lib/List.js';//引入列表组件
import TextInputDemo from '../lib/TextInput.js';//引入输入框组件
import SliderGroup from '../lib/Slider.js';//引入图片浏览插件
import ImageDemo from '../lib/Image.js';//引入图片布局
import TabBarExample from '../lib/TabBarIOS.js';//引入导航切换
import LayoutExample from '../lib/Layout.js';//引入布局组件

export default class CustomComponents extends Component{
    constructor(props){
        super(props);
    }

    /**
     * react默认把最后一个参数处理成ResponderSyntheticEvent
     * @param name
     * @param RenderComponent
     * @param tabBar
     */
    passPropsParam(name,RenderComponent,bool){
        this.props.navigator.push({
           component:DemoView,
           backNavName:'查看IOS组件',
           title:name,
           targetComponent:<RenderComponent {...this.props}/>||null,
           tabBar:bool||false
       })
    }
    render(){
        return(
            <View>
                <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={`首页`}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                <List title='整体布局flexbox'
                      touchCallback={()=>this.passPropsParam.call(this,'flex布局',LayoutExample)}
                    />
                <List title='照片浏览slider'
                      touchCallback={()=>this.passPropsParam.call(this,'照片浏览',SliderGroup)}/>
                <List title='文本输入框TextInput'
                      touchCallback={()=>this.passPropsParam.call(this,'输入框',TextInputDemo)}
                    />
                <List title='图片布局imageLayout'
                      touchCallback={()=>this.passPropsParam.call(this,'图片布局',ImageDemo)}
                    />
                <List title='底部导航切换TabBarIOS'
                      touchCallback={()=>this.passPropsParam.call(this,'tab切换',TabBarExample,true)}
                    />
            </View>
        );
    }
}