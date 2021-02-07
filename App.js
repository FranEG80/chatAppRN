import "react-native-gesture-handler"
import React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Styles from "./App.style"
import WithScreenDimensions from "./styles/ScreenStyles"

const App = () => {
  return (
    <NavigationContainer>
      <PruebaWith prueba="paco" />
    </NavigationContainer>
  )
}
export default App

const Prueba = (props) => {
  console.log(props)
  const styles = props.styles
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>Open up App.js to sassstart working on your app!</Text>
      </View>
    </View>
  )
}

const PruebaWith = WithScreenDimensions(Prueba, Styles)
