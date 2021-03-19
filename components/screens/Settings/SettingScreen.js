import React from "react"
import { Text } from "react-native"
import StackNavigator from "../../../navigators/StackNavigator"

const SettingsA = () => <Text>Setting screen</Text>

const SettingScreen = () => <StackNavigator screens={[SettingsA]} />

export default SettingScreen
