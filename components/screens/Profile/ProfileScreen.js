import React, { useEffect, useState } from "react"
import { Image, Text, View, TouchableOpacity } from "react-native"
import ActivityIndicator from "../../atomic/ActivityIndicator"
import StackNavigator from "../../../navigators/StackNavigator"
import { getUser } from "../../../user.service"
import Icon from "../../atomic/Icon/Icon"

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => alert("edit profile")}
        >
          <Icon name="pencil" font="FontAwesome" size={32} />
        </TouchableOpacity>
      ),
    })
    const getProfile = async () => {
      const _user = await getUser()
      setUser(_user)
    }
    getProfile()
  }, [])

  useEffect(() => {
    // console.log(user)
  }, [user])

  return user ? (
    <View
      style={{
        width: "90%",
        marginHorizontal: "auto",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: user.picture.large }}
        style={{ borderRadius: 100, width: 200, height: 200 }}
      />
      <Text style={{ marginVertical: 10, fontWeight: "bold", fontSize: 20 }}>
        {user.name.title} {user.name.first} {user.name.last}
      </Text>
      <Text style={{ width: "90%" }}>
        {JSON.stringify({
          gender: user.gender,
          telephone: user.cell,
          email: user.email,
          dateOfBirthday: user.dobe,
          location: user.location,
        })}
      </Text>
    </View>
  ) : (
    <ActivityIndicator size="large" />
  )
}

const ProfileScreen = () => <StackNavigator screens={[UserProfile]} />

export default ProfileScreen
