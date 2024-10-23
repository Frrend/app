import {StyleSheet} from "react-native";
import {HelloWave} from "@/components/HelloWave";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";

function Button({text, iconName}: { text: string, iconName: string }) {
    return <ThemedView style={styles.button}>
        <ThemedText style={styles.buttonText}>{text}</ThemedText>
        <ThemedView style={styles.buttonBox}>
            <MaterialCommunityIcons name={iconName as any} size={50} color="#151718"/>
        </ThemedView>
    </ThemedView>;
}

export default function HomeScreen({}) {
    return (
        <ThemedView style={{flex: 1}}>
            <ThemedView style={styles.containerHeader}>
                <ThemedView style={styles.headerTextContainer}>
                    <ThemedText style={styles.header}>Hi, Frend <HelloWave/></ThemedText>
                    <ThemedText style={styles.underHeader}>Find the best haircuts</ThemedText>
                </ThemedView>
                <ThemedView style={styles.profilePicContainer}>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.container}>
                <Link href={"/camera"}> asd</Link>
                <Link href="/camera"><Button text={"Discover your face shape"} iconName={"face-man"}/></Link>
                <Button text={"Explore new haircuts"} iconName={"compass"}/>
                <Button text={"Take a gamble"} iconName={"poker-chip"}/>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    containerHeader: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: "#00000000"
    },

    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#00000000"
    },

    button: {
        backgroundColor: "#0A7EA4",
        width: 300,
        height: 150,
        borderRadius: 10
    },

    buttonText: {
        margin: 5
    },

    buttonBox: {
        backgroundColor: "#ECEDEE",
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    headerTextContainer: {
        display: "flex",
        justifyContent: "center",
    },

    header: {
        fontSize: 25,
    },

    underHeader: {
        fontSize: 20,
    },

    profilePicContainer: {
        width: 90,
        height: 90,
        borderRadius: 1000,
        borderColor: "#ECEDEE",
        borderWidth: 4,
        backgroundColor: "#0A7EA4",
    },

    profilePic: {
        width: 100,
    }
})