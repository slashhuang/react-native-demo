/**
 * Created by slashhuang on 16/3/22.
 */
import React,{WebView,Component} from 'react-native';
export default class Blog extends Component{
    constructor(props,context){
       super();
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <NavigationBar title={this.props.title}
                               backHidden={false}
                               barTintColor='white'
                               backFunc={() => {
            this.props.navigator.pop()
          }}/>
                <WebView
                    source={{uri: this.props.url}}/>
            </View>
        )
    }

}