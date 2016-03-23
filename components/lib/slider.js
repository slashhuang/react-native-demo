import React,{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Component
} from 'react-native';

var ComponentSliderStyle = StyleSheet.create({
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
    },
    horizontalScrollView: {
        height: 120,
    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#527FE4',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#888888',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 64,
        height: 64,
    }
});
class ImgSlider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={ComponentSliderStyle.button}>
                <Image style={ComponentSliderStyle.img} source={{uri:this.props.uri}}
                      />
            </View>
        );
    }
}
class SliderGroup extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                {
                    this.props.thumbArray.map((thumb,index)=>{
                        return (
                            <ImgSlider uri={thumb} key={index}/>
                    )})
                }

                </View>)
    }
}
export default SliderGroup;
