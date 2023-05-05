import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";

const Start = (props) => {
  const [senderID, setSenderID] = useState("");
  const [channelID, setChannel] = useState("");
  const [error, setError] = useState("");

  return (
    <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
      <View style={{ marginTop: 100 }} />

      <Image
        source={require("../assets/message.jpg")}
        style={style.imageStyle}
      />
      <Input
        style={style.inputStyle}
        onChangeText={(data) => setSenderID(data)}
        label="Enter your ID"
      />
      <Input
        style={style.inputStyle}
        onChangeText={(data) => {
          setChannel(data);
          setError("");
        }}
        label="Enter your Chat Room"
      />
      {error ? <Text style={style.errorStyle}>{error}</Text> : null}
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => {
          if (channelID) {
            props.navigation.navigate("Chat", {
              senderID,
              channelID,
            });
          } else setError("Channel Room ID Required");
        }}
      >
        <Text style={style.buttonContent}> CHAT NOW!!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

Start.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const style = StyleSheet.create({
  imageStyle: { width: 380, height: 300, borderRadius: 25, marginBottom: 40 },
  headerStyle: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  inputStyle: {
    marginLeft: 20,
    marginBottom: 10,
  },
  errorStyle: {
    color: "red",
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonStyle: {
    marginLeft: 80,
    height: 80,
    width: 190,
    backgroundColor: "#D8BFD8",
    borderRadius: 75,
    alignItems: "center",
  },
  buttonContent: {
    marginTop: 27,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Start;
