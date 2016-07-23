var React = require('react-native')
var Swiper = require('react-native-swiper')
var {
    StyleSheet,
    View,
    Image,
    } = React

var styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
    }
});

var swiper = React.createClass({
    render: function() {
        return (
            <View>
                <Swiper style={styles.wrapper}
                        height={200}
                        horizontal={true}
                        autoplayTimeout={0.8}
                        autoplay={true}
                        dot={<View style={{backgroundColor:'rgba(255,255,255,0.5)', width: 8, height: 8,borderRadius: 10, margin:6,}} />}
                        activeDot={<View style={{backgroundColor: '#FF9E35', width: 10, height: 10, borderRadius: 10, margin:6}} />}
                        paginationStyle={{
                        position: 'absolute',
                        bottom: 10,
                        left: 0,
                        right: 0,
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'transparent'
                        }}
                    >
                    <View style={styles.slide}>
                        <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
                    </View>
                </Swiper>
            </View>
        )
    }
})

module.exports = swiper
