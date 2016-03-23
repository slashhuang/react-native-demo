/**
 * Created by slashhuang on 16/3/23.
 */
var React = require('react-native');
var {
    SegmentedControlIOS,
    Text,
    View,
    StyleSheet
    } = React;

var BasicSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View style={{marginBottom: 10}}>
                    <SegmentedControlIOS values={['One', 'Two']} />
                </View>
                <View>
                    <SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']} />
                </View>
            </View>
        );
    }
});

var PreSelectedSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View>
                    <SegmentedControlIOS values={['One', 'Two']} selectedIndex={0} />
                </View>
            </View>
        );
    }
});

var MomentarySegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View>
                    <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
                </View>
            </View>
        );
    }
});

var DisabledSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View>
                    <SegmentedControlIOS enabled={false} values={['One', 'Two']} selectedIndex={1} />
                </View>
            </View>
        );
    },
});

var ColorSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View style={{marginBottom: 10}}>
                    <SegmentedControlIOS tintColor="#ff0000" values={['One', 'Two', 'Three', 'Four']} selectedIndex={0} />
                </View>
                <View>
                    <SegmentedControlIOS tintColor="#00ff00" values={['One', 'Two', 'Three']} selectedIndex={1} />
                </View>
            </View>
        );
    },
});

var EventSegmentedControlExample = React.createClass({
    getInitialState() {
        return {
            values: ['One', 'Two', 'Three'],
            value: 'Not selected',
            selectedIndex: undefined
        };
    },

    render() {
        return (
            <View>
                <BasicSegmentedControlExample/>
                <PreSelectedSegmentedControlExample/>
                <MomentarySegmentedControlExample/>
                <ColorSegmentedControlExample/>
                <Text style={styles.text} >
                    Value: {this.state.value}
                </Text>
                <Text style={styles.text} >
                    Index: {this.state.selectedIndex}
                </Text>
                <SegmentedControlIOS
                    values={this.state.values}
                    selectedIndex={this.state.selectedIndex}
                    onChange={this._onChange}
                    onValueChange={this._onValueChange} />
            </View>
        );
    },

    _onChange(event) {
        this.setState({
            selectedIndex: event.nativeEvent.selectedSegmentIndex,
        });
    },

    _onValueChange(value) {
        this.setState({
            value: value,
        });
    }
});

var styles = StyleSheet.create({
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});
export default EventSegmentedControlExample;

