import { SCREENS } from "../configs/constants"
import React, { useState, useLayoutEffect } from "react"
import { useWindowDimensions, StyleSheet } from "react-native"

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

const handleSize = (width) =>
  width <= 550
    ? SCREENS.MOBILE
    : width <= 900
    ? SCREENS.TABLET_PORTRAIT
    : width <= 1200
    ? SCREENS.TABLET_LANDSCAPE
    : SCREENS.DESKTOP
