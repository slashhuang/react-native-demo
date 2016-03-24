/**
 * Created by slashhuang on 16/3/24.
 * 展示demo页面
 */
import React,{
    View,
    Text,
    Component
} from 'react-native'
import NavigationBar from '../lib/react-native-navigationbar/lib/index.js';//引入头部导航条
export default class DemoView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={this.props.backNavName}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                <Text>hello world</Text>
            </View>
        );
    }
}