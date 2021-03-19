/* eslint-disable react/display-name */
import { SCREENS } from "../constants/screen"
import React, { useState, useLayoutEffect } from "react"
import { useWindowDimensions, Platform } from "react-native"

const useScreenStyles = () => {
  const screenWidth = useWindowDimensions().width
  const [typeScreen, setTypeScreen] = useState(
    Platform.OS === "web" ? SCREENS.DESKTOP : SCREENS.MOBILE
  )

  useLayoutEffect(() => setTypeScreen(handleSize(screenWidth)), [screenWidth])

  return typeScreen
}
export default useScreenStyles

const handleSize = (width) => {
  if (width <= 525 || Platform.OS !== "web") return SCREENS.MOBILE
  if (width <= 900) return SCREENS.TABLET_PORTRAIT
  if (width <= 1200) return SCREENS.TABLET_LANDSCAPE
  return SCREENS.DESKTOP
}
