import { useTheme } from "@react-navigation/native"
import React from "react"
import { ActivityIndicator } from "react-native"

const MyActivityIndicator = ({
  size = "small",
  style = {},
  color = false,
} = {}) => {
  if (!color) {
    const { colors } = useTheme()
    color = colors.primary
  }
  return (
    <ActivityIndicator size={size} style={[{ flex: 1 }, style]} color={color} />
  )
}

export default MyActivityIndicator
