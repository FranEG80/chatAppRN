import "react-native-gesture-handler"
import React from "react"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Styles from "./styles/AppStyles"
import WithScreenDimensions from "./styles/ScreenStyles"
import HomeScreen from "./screens/home/HomeScreen"

const App = ({ styles }) => {
  return (
    <NavigationContainer>
      <View style={styles.body}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </View>
    </NavigationContainer>
  )
}
export default WithScreenDimensions(App, Styles)
