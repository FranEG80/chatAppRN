// const desktop = {
//   body: {
//     flex: 1,
//     margin: 0,
//     padding: 0,
//     backgroundColor: "#efefef",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container: {
//     width: "500px",
//     height: "90vh",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 5,
//     // boxShadow: "15px 15px 25px #ccc",
//   },
// }
// const tabletPortrait = { ...desktop }
// const tabletLandscape = { ...desktop }
// const mobile = {
//   ...desktop,
//   container: {
//     ...desktop.container,
//     height: "100%",
//     width: "100%",
//   },
// }

// export default {
//   mobile,
//   tabletLandscape,
//   tabletPortrait,
//   desktop,
// }

const desktop = {
  body: {},
  container: {},
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
