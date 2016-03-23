/**
 * Created by slashhuang on 16/3/23.
 */
var React = require('react-native');
var {
    TextInput,
    Component
    } = React;
export default  class TextInputExample extends Component{
    constructor(){
        super();
        this.state={
            text:'hello world'
        }
    }
    render(){
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
        )}
}