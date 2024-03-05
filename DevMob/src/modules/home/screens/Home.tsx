import React from "react";
import Text from "../../../shared/components/text/Text";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import styles from "../styles/home.styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#FF5364"
            />
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home;