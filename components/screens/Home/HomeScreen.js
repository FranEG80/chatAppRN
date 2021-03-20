import React from "react"
import { Button, Text, View } from "react-native"
import StackNavigator from "../../../navigators/StackNavigator"

const CompA = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button
      title="CompB"
      onPress={() => {
        navigation.navigate("CompB")
      }}
    />
  </View>
)
const CompB = () => <Text>CompB screen</Text>

const HomeScreen = () => <StackNavigator screens={[CompA, CompB]} />

export default HomeScreen
