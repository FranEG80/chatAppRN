const URI = "https://randomuser.me/api/?&nat=es"
const NUM_RESULTS = 15

const fetchJSON = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export const getUser = async () => {
  const users = await fetchJSON(URI + "&gender=male")
  return users.results[0]
}

export const getUsers = async () => {
  const users = await fetchJSON(`${URI}&results=${NUM_RESULTS}`)
  return users.results
}
