import React from "react";
import { Card, Divider } from '@rneui/themed';
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import Button from "../../../shared/components/button/Button";
import styles from "../styles/profile.styles";

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Image
                        style={styles.profileImage}
                        source={require('../../../../assets/woman.png')}
                    />
                </View>
                <Text style={styles.name} type="TITLE">Maria Silva</Text>
                <Card containerStyle={{ marginTop: 50 }}>
                    <Text>Email: maria_silva@gmail.com</Text>
                </Card>
            </View>

            <View style={styles.footer}>
                <Button style={styles.button} title="Sair" backColor="#FF5364"/>
            </View>

        </SafeAreaView>
    )
}

export default Profile;