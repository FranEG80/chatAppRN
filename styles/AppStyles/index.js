import Styles from "./App.style"

const desktop = {
  body: {
    flex: 1,
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "500px",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
    ...Styles.desktop.container,
  },
}
const tabletPortrait = { ...desktop }
const tabletLandscape = { ...desktop }
const mobile = {
  ...desktop,
  container: {
    ...desktop.container,
    height: "100%",
    width: "100%",
  },
}

export default {
  desktop,
  tabletLandscape,
  tabletPortrait,
  mobile,
}
