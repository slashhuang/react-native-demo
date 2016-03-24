/**
 * Created by slashhuang on 16/3/24.
 */
import React,{
    View,
    Text,
    Component
} from 'react-native'
import DemoView from './demo.js';//demo展示窗口
/**
 * 组件
 */
import List from '../lib/List.js';//引入列表组件
import Slider from '../lib/Slider.js';//引入图片浏览插件
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条
export default class CustomComponents extends Component{
    constructor(props){
        super(props);
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
                      touchCallback={()=>{
                        this.props.navigator.push({
                            component:DemoView,
                            backNavName:'查看IOS组件',
                            title:'图片slider'
                        })
                      }}
                    />
            </View>
        );
    }
}