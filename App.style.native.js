const desktop = {
  body: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "500px",
    height: "90vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
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
  mobile,
  tabletLandscape,
  tabletPortrait,
  desktop,
}
