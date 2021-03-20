import React, { useState, useEffect } from "react"
import ActivityIndicator from "../ActivityIndicator"
import path from "path"

const MyIcon = ({
  name = "help",
  size = 32,
  color = "black",
  font = "Ionicons",
} = {}) => {
  const [Icon, setIcons] = useState(false)
  useEffect(() => {
    const loadIcons = async () => {
      let icono = false
      try {
        switch (font) {
          case "FontAwesome":
            icono = await import("react-native-vector-icons/FontAwesome")
            break
          case "Feather":
            icono = await import("react-native-vector-icons/Feather")
            break
          case "Ionicons":
          default:
            icono = await import("react-native-vector-icons/Ionicons")
            break
        }
        setIcons(() => icono.default)
      } catch (err) {
        console.error(err)
      }
    }
    loadIcons()
  }, [])

  return !Icon ? (
    <ActivityIndicator />
  ) : (
    <Icon name={name} size={size} color={color} />
  )
}

export default MyIcon
