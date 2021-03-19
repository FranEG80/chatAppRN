import React from "react"
import Icon from "react-native-vector-icons/Ionicons"

const MyIcon = ({ name = "help", size = 32, color = "black" } = {}) => {
  return <Icon name={name} size={size} color={color} />
}

export default MyIcon
