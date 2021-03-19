import React from "react"
import { Text } from "react-native"
import StackNavigator from "../../../navigators/StackNavigator"

const MediaA = () => <Text>MediaScreen</Text>

const MediaScreen = () => <StackNavigator screens={[MediaA]} />

export default MediaScreen
