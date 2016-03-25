/**
 * Created by slashhuang on 16/3/25.
 */

import React,{
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ActivityIndicatorIOS
} from 'react-native';

var NetworkImageExample = React.createClass({
    getInitialState: function() {
        return {
            error: false,
            loading: true,
            progress: 0
        };
    },
    getDefaultProps: function(){
        return {
            source:{uri:'http://www.pp3.cn/uploads/allimg/111120/1029163a1-5.jpg'}
        }
    },
    render: function() {
        var loader = this.state.loading ?
            <View style={styles.flexCenter}>
                    <View style={[styles.flexCenter,styles.row,{width:120,height:80}]}>
                        <View style={{width:80,justifyContent:'center',alignItems:'center'}}>
                            <Text>{this.state.progress||999}%</Text>
                        </View>
                        <ActivityIndicatorIOS
                            style={{flex:1}}
                            size="large"
                            color="#0000ff"
                            />
                    </View>
            </View> : null;
        return this.state.error ?
            <Text>{'error happened'}</Text> :
            <View style={styles.container}>
                {/*
                 <Image
                 source={this.props.source}
                 style={[styles.base]}
                 onLoadStart={(e) => this.setState({loading: true})}
                 onError={(e) => this.setState({error: e.nativeEvent.error, loading: false})}
                 onProgress={(e) => this.setState({progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)})}
                 onLoad={() => setTimeout(()=>this.setState({loading: false, error: false}),2000)} />
                */}
                {loader}
            </View>
    }
});

class NetworkImageCallbackExample extends Component{
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            mountTime: new Date(),
        };
    }
    static defaultProps={
       source:{uri:'http://www.deskcar.com/desktop/else/2012517235524/18.jpg'}
    };
    componentWillMount(){
        this.setState({mountTime: new Date()});
    }
    _loadEventFired(event) {
        /**
         * 在回调函数中仅仅设置events,优化了性能
         */
        this.setState((state) => {
            return state.events = [...state.events, event];
        });
    }
    render(){
        var { mountTime } = this.state;
        return (
           <View style={styles.container}>
                <View style={{flex:4}}>
                    <Image  source={this.props.source}
                            style={[styles.base]}
                            onLoadStart={() => this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)}
                            onLoad={() => this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`)}
                            onLoadEnd={() => this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`)}
                        />
               </View>
               <View style={[styles.flexCenter,{marginTop:3}]}>
                   <Text style={styles.text} numberOfLines={2}>
                       {this.state.events.join('  ')}
                   </Text>
               </View>
           </View>)
    }
}
export default class ImageDemo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={{flex:1}}>
                <NetworkImageCallbackExample />
                <NetworkImageExample />
            </View>)
    }
}
let styles=StyleSheet.create({
    container:{
        height:200,
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    text:{
       fontSize:12,
       color:'sienna'
    },
    base: {
        flex:1,
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    flexCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    row: {
        flexDirection: 'row',
    },
    leftMargin: {
        marginLeft: 10,
    },
    background: {
        backgroundColor: '#222222'
    },
    sectionText: {
        marginVertical: 6,
    },
    nestedText: {
        marginLeft: 12,
        marginTop: 20,
        backgroundColor: 'transparent',
        color: 'white'
    },
    resizeMode: {
        width: 90,
        height: 60,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    resizeModeText: {
        fontSize: 11,
        marginBottom: 3,
    },
    icon: {
        width: 15,
        height: 15,
    },
    horizontal: {
        flexDirection: 'row',
    },
    gif: {
        flex: 1,
        height: 200,
    },
    base64: {
        flex: 1,
        height: 50,
        resizeMode: 'contain',
    }
});
