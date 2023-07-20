import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from "react-native";

export default function App() {
  console.log("testing");
  const clickText = () => {
    console.log("The text is clicked.");
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={clickText}>
        Hello React Native. I need to test realy eay long text what happended
        after I typing some kind of text like this.
      </Text>
      <TouchableNativeFeedback onPress={()=>console.log("Image tapped.")}>
      <Image
        blurRadius={10}
        fadeDuration={2000}
        source={{
          width: 200,
          height: 100,
          uri: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2RlYWRsaWVzdC1zbmFrZXMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
        }}
      />
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
