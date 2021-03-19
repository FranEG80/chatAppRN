import React from "react"
import { Text } from "react-native"
import StackNavigator from "../../../navigators/StackNavigator"

const ChatA = () => <Text>Chat screen</Text>

const ChatScreen = () => <StackNavigator screens={[ChatA]} />

export default ChatScreen
