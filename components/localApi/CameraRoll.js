/**
 * 使用链接库
 * 并不是所有的APP都需要使用全部的原生功能，包含支持全部特性的代码会增大应用的体积
 * @type {ReactNative|exports|module.exports}
 * 操作链接:http://reactnative.cn/docs/0.22/linking-libraries-ios.html#content
 */
const React = require('react-native');

const {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    CameraRoll,
    Component,
    Alert,
    TouchableOpacity,
    PixelRatio
    } = React;
/**
 * 若在外层容器定义alignItems和justifyContent会导致里面的内容按照内容自动缩放，
 * 难以产生块级元素的效果
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        //alignItems:'center',
        //justifyContent:'center'
    },
    textButton: {
        flex:1,
        backgroundColor:'#fff',
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        borderTopColor:'#ddd',
        borderTopWidth:1/PixelRatio.get(),
        borderBottomColor:'#ddd',
        borderBottomWidth:1/PixelRatio.get()
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }
});

export default  class CameraRollDemo extends Component{
   constructor() {
       super();
        this.state = {
            images: [],
            num:0
        };
    }
    fetchLocalImages() {
        let that = this;
        const fetchParams = {
            first: 5
        };

        /**
         * 参数格式
         * The number of photos wanted in reverse order of the photo application
         * (i.e. most recent first for SavedPhotos).
         *
         * first: ReactPropTypes.number.isRequired,

        /**
         * A cursor that matches `page_info { end_cursor }` returned from a previous
         * call to `getPhotos`
         *
         * after: ReactPropTypes.string,

        /**
         * Specifies which group types to filter the results to.
         *
         *  groupTypes: ReactPropTypes.oneOf(GROUP_TYPES_OPTIONS),

        /**
         * Specifies filter on group names, like 'Recent Photos' or custom album
         * titles.
         *
         * groupName: ReactPropTypes.string,

        /**
         * Specifies filter on asset type
         *
         *  assetType: ReactPropTypes.oneOf(ASSET_TYPE_OPTIONS),

        /**
         * Filter by mimetype (e.g. image/jpeg).
         *
         *  mimeTypes: ReactPropTypes.arrayOf(ReactPropTypes.string)
         */
        CameraRoll.getPhotos(fetchParams).then(that.storeImages.bind(that)).catch(that.logImageError.bind(that));
    }
    storeImages(data) {
        let that=this;
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        Alert.alert('','获取本地图片成功',[{text:'ok',onPress:()=>{
            that.setState({
                num:assets.length
            })

        }}]);
        this.setState({
            images: images,
        });
    }

    logImageError(err) {
        /**
         * arguments[0]title
         * arguments[1]message
         * arguments[2]options:{text:string,onPress:'callback',style:['cancel','destructive','default']}
         */
        console.error(err);
        Alert.alert(
            '',
            'err happened',
            [
                {text: 'Cancel', onPress: () => Alert.alert('Cancel=> Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => Alert.alert('ok=> Pressed'),style:'destructive'}
            ]
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.fetchLocalImages.bind(this)}>
                    <View style={styles.textButton}>
                        <Text style={{fontSize:17}}>点击获取本地图片</Text>
                    </View>
                    {
                        !this.state.num?null:(
                            <View style={styles.textButton}>
                                <Text style={{fontSize:17}}>共获取到{this.state.num}张图</Text>
                            </View>)
                    }

                </TouchableOpacity>
                <ScrollView style={{flex:1}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        { this.state.images.map((image) => <Image style={styles.image} key={image.uri} source={{ uri: image.uri }} />) }
                    </View>
                </ScrollView>
            </View>

        );
    }
}