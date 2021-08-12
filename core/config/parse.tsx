//Parse SDK
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native.js";

export const ParserInit = () => {
  if (
    !process.env.APP_ID ||
    !process.env.MASTER_KEY ||
    !process.env.SERVER_URL
  ) {
    return false;
  }

  Parse.setAsyncStorage(AsyncStorage);
  Parse.serverURL = process.env.SERVER_URL;
  Parse.initialize(process.env.APP_ID, process.env.MASTER_KEY);
  return true;
};

export default Parse;
