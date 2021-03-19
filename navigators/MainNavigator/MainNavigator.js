import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "../../components/atomic/Icon"
import { useTheme } from "@react-navigation/native"

const Tab = createBottomTabNavigator()
const MainNavigator = ({ screens }) => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        title: "ChatApp RN",
      }}
      tabBarOptions={{
        activeTintColor: colors.text,
        activeBackgroundColor: colors.darkPrimary,
        inactiveTintColor: colors.secondary,
        inactiveBackgroundColor: colors.primary,
        tabStyle: {
          borderTopColor: colors.mediumGray,
          borderTopWidth: 1,
          borderStyle: "solid",
          width: 100,
        },
        adaptive: false, // true coloca la etiqueta del icono a la derecha
      }}
      // tabBar para crear tu mismo el componente de la barra
      lazy={true}
    >
      {screens.map((screen, i) => (
        <Tab.Screen
          key={screen.name + i}
          name={screen.name}
          component={screen}
          options={{
            title: screen.name,
            tabBarLabel: "",
            tabBarIcon: (a) => {
              const { color, size } = a
              return (
                <Icon
                  color={color}
                  size={screen.name.includes("Home") ? size + 10 : size}
                  name={getNameIcon(screen.name)}
                />
              )
            },
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default MainNavigator

const getNameIcon = (name) => {
  switch (name.replace("Screen", "")) {
    case "Home":
      return "home"
    case "Setting":
      return "settings"
    case "Profile":
      return "person-circle"
    case "Chat":
      return "chatbubbles"
    case "Media":
      return "ios-images"
  }
}
