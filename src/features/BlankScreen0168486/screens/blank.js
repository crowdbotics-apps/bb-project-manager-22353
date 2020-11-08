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
      <View style={styles.View_5}>
        <View style={styles.View_6}>
          <View style={styles.View_11}>
            <View style={styles.View_12}>
              <View style={styles.View_26}>
                <View style={styles.View_27}>
                  <Text style={styles.Text_15}>Offene Aufgaben</Text>
                  <Text>Sample text content</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_13} />
            <View style={styles.View_14} />
          </View>
        </View>
        <View style={styles.View_7} />
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
  View_9: {},
  View_1: { flexDirection: "row", flexWrap: "nowrap" },
  View_3: {},
  View_7: { flexDirection: "row" },
  View_8: {},
  Button_13: {},
  Button_16: {},
  Button_11: {},
  View_9: {},
  Text_22: {},
  View_1: { flexDirection: "row", flexWrap: "nowrap" },
  View_3: {},
  View_7: { flexDirection: "row" },
  View_8: {},
  Button_13: {},
  Button_16: {},
  Button_11: {},
  View_9: {},
  Text_22: {},
  View_1: { flexDirection: "row", flexWrap: "nowrap" },
  View_3: {},
  View_7: { flexDirection: "row" },
  View_8: {},
  Button_13: {},
  Button_16: {},
  Button_11: {},
  View_9: {},
  Text_22: {},
  View_32: {},
  View_33: { flexDirection: "row" },
  View_34: { flexDirection: "row" },
  View_1: { flexDirection: "column", flexWrap: "nowrap" },
  View_5: { width: "100%", height: "10%" },
  View_6: { width: "100%" },
  View_11: { width: "100%", flexDirection: "row" },
  View_12: { width: "33%" },
  View_26: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#6e6e6e",
    borderWidth: 1
  },
  View_27: { width: "100%" },
  Text_15: { width: "100%", height: 100, borderColor: "#454545" },
  Text_25: {},
  View_13: { width: "33%" },
  View_14: { width: "33%" },
  View_7: { width: "100%", alignSelf: "flex-start" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
