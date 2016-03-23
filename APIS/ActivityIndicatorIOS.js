/**
 * Created by slashhuang on 16/3/22.
 */
var React = require('react-native');
var {
    ActivityIndicatorIOS,
    StyleSheet,
    View,
    } = React;
var TimerMixin = require('react-timer-mixin');

var ToggleAnimatingActivityIndicator = React.createClass({
    mixins: [TimerMixin],

    getInitialState: function() {
        return {
            animating: true,
        };
    },

    setToggleTimeout: function() {
        this.setTimeout(
            () => {
                this.setState({animating: !this.state.animating});
                this.setToggleTimeout();
            },
            1200
        );
    },

    componentDidMount: function() {
        this.setToggleTimeout();
    },

    render: function() {
        return (
            <ActivityIndicatorIOS
                animating={this.state.animating}
                style={[styles.centering, styles.gray,{height: 80}]}
                color="white"
                size="large"
                />
        );
    }
});

export default  ToggleAnimatingActivityIndicator;
var styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gray: {
        backgroundColor: 'rgba(50,50,50,0.6)'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
