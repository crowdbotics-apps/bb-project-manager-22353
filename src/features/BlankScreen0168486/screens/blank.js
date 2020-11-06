import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View style={styles.View_1}>
      <View>
        <View style={styles.View_7}>
          <View>
            <Button title="Dashboard" onPress={() => alert("Pressed!")} />
            <Button title="Aufgaben" onPress={() => alert("Pressed!")} />
            <Button title="Profil" onPress={() => alert("Pressed!")} />
          </View>
          <View />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: { flexDirection: "row", flexWrap: "nowrap" },
  View_3: {},
  View_7: { flexDirection: "row" },
  View_8: {},
  Button_13: {},
  Button_16: {},
  Button_11: {},
  View_9: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
