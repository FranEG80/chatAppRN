import { SCREENS } from "../configs/constants"
import React, { useState, useLayoutEffect } from "react"
import { useWindowDimensions, StyleSheet, Platform } from "react-native"

const WithScreenDimensions = (Component, Styles) => (props) => {
  const screenWidth = useWindowDimensions().width
  const [typeScreen, setTypeScreen] = useState(screen)
  const [styles, setStyles] = useState(Styles.mobile)

  useLayoutEffect(() => {
    setTypeScreen(screenWidth)
    setStyles(Styles[handleSize(screenWidth)])
  })

  return (
    <Component
      {...props}
      screenSize={handleSize(typeScreen)}
      styles={StyleSheet.create(styles)}
    />
  )
}

WithScreenDimensions.displayName = "HookDimensions"

export default WithScreenDimensions

const handleSize = (width) => {
  if (width <= 525 || Platform.OS) return SCREENS.MOBILE
  if (width <= 900) return SCREENS.TABLET_PORTRAIT
  if (width <= 1200) return SCREENS.TABLET_LANDSCAPE
  return SCREENS.DESKTOP
}
