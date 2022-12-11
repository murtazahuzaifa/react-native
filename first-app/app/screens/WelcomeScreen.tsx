import React, { FC } from 'react'
import { ImageBackground, StyleSheet, View, StatusBar, Image, Text, } from 'react-native';

const WelcomeScreen: FC = ({ }) => {
    return (
        <ImageBackground style={styles.background} source={{ uri: "https://picsum.photos/200/300" }}>
            {/* <StatusBar hidden /> */}
            <View style={styles.loggContainer} >
                <Image style={styles.logo} source={require('../assets/favicon.png')} />
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.registerButton} ></View>
        </ImageBackground>
    )
}

export default WelcomeScreen;

// rnss
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
        // paddingTop: StatusBar.currentHeight
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logo: {
        width: 100,
        height: 100,
        // margin: "0 auto"
    },
    loggContainer: {
        position: "absolute",
        top: 30,
        alignItems: "center",
    },
})