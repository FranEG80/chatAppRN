import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity, View } from "react-native"
import Icon from "../../components/atomic/Icon"
import { useTheme } from "@react-navigation/native"

const Stack = createStackNavigator()

const StackNavigator = ({ screens }) => {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Stack.Navigator initialRouteName={screens[0].name}>
        {screens.map((screen, i) => (
          <Stack.Screen
            key={screen.name + i}
            name={screen.name}
            component={screen}
            options={({ navigation, route }) => {
              return {
                headerStyle: {
                  backgroundColor: colors.primary,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerTitle: screen.name,
                headerLeft: navigation.canGoBack()
                  ? () => (
                      <TouchableOpacity
                        style={{ marginLeft: 20 }}
                        onPressOut={() => navigation.goBack()}
                      >
                        <Icon name="arrow-back" size={32} />
                      </TouchableOpacity>
                    )
                  : "",
                //   headerTitle: "asdf",
              }
            }}

            // * Para poner un componente propio
            // options={{headerTitle: props => <Component {...props}/>}}
          />
        ))}
      </Stack.Navigator>
    </View>
  )
}

export default StackNavigator
