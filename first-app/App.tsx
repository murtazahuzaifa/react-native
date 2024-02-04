import { StatusBar } from 'expo-status-bar';
import { FC, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, StatusBar as _StatusBar, Dimensions,
  TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Button, Alert, Platform,
} from 'react-native';
import { useDimensions, useDeviceOrientation, } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import { Adjust } from 'react-native-adjust';

//https://amanhimself.dev/blog/safe-area-context-in-react-native-apps/
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {

  useEffect(() => {
    
    return () => Adjust.componentWillUnmount();
  }, [])
  // console.log("Hello");
  // console.log("Dimensions", Dimensions.get("window"))
  return (
    <SafeAreaView style={{ backgroundColor: "lightblue", flex: 1 }} >
      {/* <HomeScreen /> */}
      <WelcomeScreen />
      {/* <Screen2 /> */}
    </SafeAreaView>
  );
}

const HomeScreen: FC = () => {
  // const insets = useSafeAreaInsets();
  // const dimension = Dimensions.get("screen");
  const dimension = useDimensions();


  // console.log("Platform", Platform)
  // console.log("insets", insets)
  // console.log("Dimensions", dimension)
  console.log("useDeviceOrientation", useDeviceOrientation())

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text numberOfLines={2} onPress={() => { console.log("text press") }} >
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea vitae, delectus voluptatum commodi odit hic veniam impedit nam iste temporibus dignissimos libero voluptas totam maxime est iusto neque harum earum facilis sit. Qui tenetur voluptatum facere incidunt nobis eos optio, consectetur eius id harum ipsam? Ducimus beatae tempora illo.
    //   </Text>
    //   {/* <StatusBar style="inverted" translucent backgroundColor='transparent' animated /> */}
    // </SafeAreaView>
    <SafeAreaView style={{ ...styles.container, }}>
      <StatusBar hidden backgroundColor="lightblue" />
      <Text style={{ fontSize: 28, color: 'green' }}>Hello World</Text>
      {/* <Image source={require("./assets/favicon.png")}  /> */}
      <TouchableHighlight onPress={() => console.log("Image Clicked")} onLongPress={() => console.log("Image Clicked long")} >
        <Image
          resizeMode='cover'
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/200/300", width: dimension.screen.width, height: 300
          }} />
      </TouchableHighlight>
      <Button title='Press Me' color="gray"
        onPress={() => {
          Alert.alert("Alert Title", "An Alert Message", [
            { text: "Cancel", onPress() { alert("Are you sure?") }, style: "destructive", },
            { text: "Okay", style: "default" }
          ])
          // Alert.prompt("Alert Title", "An ALert Message", (txt) => console.log(txt), "plain-text")
        }}
      />
      {/* <Section /> */}
    </SafeAreaView>
  )
}

const Screen2: FC = () => {
  return (
    <View style={{
      backgroundColor: 'yellow', flex: 1, display: "flex", flexDirection: "row",
      alignItems: "center", justifyContent: 'center'
    }}>
      <View style={{ backgroundColor: 'lightgreen', height: 100, width: 100, }} />
      <View style={{ backgroundColor: 'olive', height: 100, width: 100, top: 100 }} />
      <View style={{ backgroundColor: 'indigo', height: 100, width: 100, }} />
    </View>
  )
}

const Section: FC = () => {
  const dimension = Dimensions.get("screen");
  // console.log("Section_Dimensions", dimension)
  return (
    <View style={{ backgroundColor: 'yellow', flex: 1, }}>
      <Text style={{ fontSize: 28, color: 'green' }}>Hello World in Section</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
