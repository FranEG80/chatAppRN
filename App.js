import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Styles from "./styles/AppStyles"
import useScreenStyles from "./styles/screen.hook"
import HomeScreen from "./components/screens/Home"
import SettingScreen from "./components/screens/Settings"
import ChatScreen from "./components/screens/Chat"
import ProfileScreen from "./components/screens/Profile"
import MediaScreen from "./components/screens/Media"
import ActivityIndicator from "./components/atomic/ActivityIndicator"
import MainNavigator from "./navigators/MainNavigator"
import { LightTheme } from "./constants/styles"

const App = () => {
  const screen = useScreenStyles()
  const { colors: themeColors } = LightTheme

  const [isLoading, setLoading] = useState(true)
  const [styles, setStyles] = useState(null)

  useEffect(() => setStyles(StyleSheet.create({ ...Styles[screen] })), [screen])

  useEffect(() => {
    if (styles === null) {
      setLoading(false)
    }
  }, [styles])

  const Screens = [
    ProfileScreen,
    ChatScreen,
    HomeScreen,
    MediaScreen,
    SettingScreen,
  ]
  console.log(Styles[screen].container)
  return (
    <NavigationContainer theme={LightTheme}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View
          style={[
            styles.body,
            { backgroundColor: themeColors.backgroundSecondary },
          ]}
        >
          <View
            style={[
              styles.container,
              {
                boxShadow: Styles[screen].container.boxShadow
                  ? `${Styles[screen].container.boxShadow} ${themeColors.shadow}`
                  : "",
              },
            ]}
          >
            <MainNavigator screens={Screens} />
          </View>
        </View>
      )}
    </NavigationContainer>
  )
}
export default App
