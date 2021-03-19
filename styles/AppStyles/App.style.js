const desktop = {
  body: {},
  container: {
    borderRadius: 5,
    boxShadow: "15px 15px 25px",
  },
}
const tabletPortrait = { ...desktop }
const tabletLandscape = { ...desktop }
const mobile = { ...desktop }

export default {
  mobile,
  tabletLandscape,
  tabletPortrait,
  desktop,
}
