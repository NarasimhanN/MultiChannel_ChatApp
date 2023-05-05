import Fetch from "./screens/firebase_db";
import FireBaseChat from "./screens/firebase_chat_gifted";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Start from "./screens/Start";

const navigator = createStackNavigator({
  Start: Start,
  Chat: FireBaseChat,
});
export default createAppContainer(navigator);
