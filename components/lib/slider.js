import React,{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Component
} from 'react-native';

class ImgSlider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <Image  source={{uri:this.props.uri}}
                      />
            </View>
        );
    }
}
class SliderGroup extends Component{
    constructor(props) {
        super(props);
    }
    static defaultProps={
        thumbArray:[
            'http://img5.imgtn.bdimg.com/it/u=1010422090,2699250769&fm=21&gp=0.jpg',
            'http://d.hiphotos.baidu.com/zhidao/pic/item/b90e7bec54e736d1acd947199b504fc2d46269dd.jpg',
            'http://img0.imgtn.bdimg.com/it/u=4138794639,2244905623&fm=21&gp=0.jpg'
        ]
    };
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
