// import Login from "./screens/components/Login";
// import Chat from "./screens/components/Chat";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import Example from "./screens/components/ChatHindi";
// // // Import React Navigation
// // // Create the navigator
// const navigator = createStackNavigator({
//   Login: Login,
//   Chat: Chat,
//   ChatHindi: Example,
// });
// export default createAppContainer(navigator);

// Import React Navigation
// Create the navigator
// export default createStackNavigator({
//   Login: Login,
//   Chat: Chat,
// });

///////////////////////
import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { View, ActivityIndicator } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
// import { View, Text } from "react-native";

// const App = () => {
//   return (
//     <View style={{ backgroundColor: "red", height: 200 }}>
//       <Text style={{ fontSize: 20 }}>Here is text</Text>
//     </View>
//   );
// };
// export default App;
// const navigator = createStackNavigator({
//   Login: Login,
//   Signup: Signup,
//   Chat: Chat,
// });
// export default createAppContainer(navigator);

// /
