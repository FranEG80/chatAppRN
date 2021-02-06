import "react-native-gesture-handler"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Styles from "./App.style"

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    </NavigationContainer>
  )
}
export default App
const styles = StyleSheet.create(Styles)
