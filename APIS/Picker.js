/**
 * Created by slashhuang on 16/3/23.
 */
var React = require('react-native');
var {
    Picker,
    View,
    Component
    } = React;
export default class PickerExample extends Component{
    constructor(props,context){
        super();
        this.state={
           language:'java'
        }
    }
    render(){
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language:lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}
