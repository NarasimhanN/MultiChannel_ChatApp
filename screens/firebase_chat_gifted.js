import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import firebase from "../config";
import CryptoJS from "react-native-crypto-js";
import { Entypo } from "@expo/vector-icons";

const FireBaseChat = (props) => {
  const sender = props.navigation.getParam("senderID");
  const reciever = "Dont know";
  const collection_id = props.navigation.getParam("channelID");
  const [messages, setMessages] = useState([]);
  const [key, setKey] = useState("12345");

  useEffect(() => {
    const querySnapshot = firebase
      .firestore()
      .collection(collection_id)
      .orderBy("createdAt", "desc");
    querySnapshot.onSnapshot((snapShot) => {
      const allMessages = snapShot.docs.map((snap) => {
        // Decrypt message before rendering
        const bytes = CryptoJS.AES.decrypt(snap.data().text, key);
        const text = bytes.toString(CryptoJS.enc.Utf8);

        return {
          ...snap.data(),
          createdAt: new Date(),
          text: text,
        };
      });
      setMessages(allMessages);
    });
  }, []);

  const onSend = (messageArray) => {
    const msg = { ...messageArray[0] };
    const ciphertext = CryptoJS.AES.encrypt(msg.text, key).toString();
    msg.text = ciphertext;
    console.log("Message:", msg);
    const myMsg = { ...msg, senderID: sender, receiverID: reciever };

    // Encrypt message before sending to Firebase

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messageArray)
    );
    firebase
      .firestore()
      .collection(collection_id)
      .add({
        ...myMsg,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "center",
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <Image
          source={require("../assets/cat.png")}
          style={{ marginLeft: 20, width: 50, height: 50, borderRadius: 25 }}
        />
        <Text
          style={{
            color: "white",
            marginLeft: 20,
            fontSize: 22,
            marginTop: 8,
            fontWeight: "bold",
          }}
        >
          {reciever}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: 180,
          borderRadius: 70,
          backgroundColor: "#E0FFFF",
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <Text> End to End Encrypted</Text>
        <Entypo name="lock" size={20} color="black" />
      </TouchableOpacity>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: sender,
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: "#00308F",
                },
              }}
            />
          );
        }}
      />
    </View>
  );
};

FireBaseChat.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default FireBaseChat;
