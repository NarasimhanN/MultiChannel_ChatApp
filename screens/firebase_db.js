// For reference on Firebase DB
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "../config";
//import "firebase/compat/firestore";
const currentDate = new Date();

const Fetch = () => {
  const now = new Date();
  const [from, setFrom] = useState();
  const [data, setData] = useState();
  const addDocument = async () => {
    try {
      const db = firebase.firestore();
      const docRef = await db.collection(collection_name).add({
        from: "p",
        data: data,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //   const createDocument = async () => {
  //     try {
  //       const db = firebase.firestore();
  //       const docRef = await db.collection(collection_name).add({
  //         name: "John Doe",
  //         age: 30,
  //         email: "johndoe@example.com",
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (error) {
  //       console.error("Error adding document: ", error);
  //     }
  //   };

  const [users, setUser] = useState([]);

  const collection_name = "D1P5";
  const dbcollRef = firebase.firestore().collection(collection_name);
  useEffect(() => {
    //createDocument();
    const unsubscribe = dbcollRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { from, data, _createdAt, date, time } = doc.data();
        users.push({
          id: doc.id,
          from,
          data,
          date: Date.parse(date),
          time: Date.parse(time),
        });
      });
      setUser(users);
      //   const sortedData = [...users].sort((a, b) => (a._createdAt - b._createdAt)&&(a));
      const sortedData = [...users].sort((a, b) => {
        if (a.date < b.data) return 1;
        if (a.date > b.date) return -1;
        if (a.time < b.time) return 1;
        else return -1;
      });

      setUser(sortedData);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.innercontainer}>
            {item.from == "d" ? (
              <Text style={styles.left}>DOCTOR:{item.data}</Text>
            ) : item.from == "p" ? (
              <Text style={styles.right}>PATIENT:{item.data}</Text>
            ) : null}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        label="data"
        style={styles.inputText}
        onChangeText={(d) => setData(d)}
      />
      <Button
        title="Create"
        onPress={() => {
          addDocument();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    height: 60,
    borderWidth: 3,
  },
  left: {
    marginLeft: 20,
  },
  right: {
    marginLeft: 180,
  },

  container: {
    backgroundColor: "green",
    margin: 5,
  },
  innercontainer: {
    alignContent: "center",
    flexDirection: "column",
  },
  itemHeader: {
    fontWeight: "bold",
    marginTop: 20,
  },
  itemText: {
    fontWeight: "300",
  },
});

export default Fetch;
