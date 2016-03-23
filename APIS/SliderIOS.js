/**
 * Created by slashhuang on 16/3/23.
 */
var React = require('react-native');
var {
    SliderIOS,
    Text,
    StyleSheet,
    View,
    } = React;

var SliderExample = React.createClass({
    getInitialState() {
        return {
            value: 0,
        };
    },

    render() {
        return (
            <View>
                <Text style={styles.text} >
                    {this.state.value}
                </Text>
                <SliderIOS
                    {...this.props}
                    onValueChange={(value) => this.setState({value: value})} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    slider: {
        height: 10,
        margin: 10,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});

export default SliderExample