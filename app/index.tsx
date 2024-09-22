import {Pressable, StyleSheet} from "react-native";
import {HelloWave} from "@/components/HelloWave";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Index() {
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
                <Pressable style={styles.button}>
                    <ThemedText style={styles.buttonText}>Take a gamble</ThemedText>
                    <Pressable style={styles.buttonBox}>
                        <MaterialCommunityIcons name="poker-chip" size={50} color="#151718"/>
                    </Pressable>
                </Pressable>

                <Pressable style={styles.button}>
                    <ThemedText style={styles.buttonText}>Take a gamble</ThemedText>
                    <Pressable style={styles.buttonBox}>
                        <Ionicons name="compass" size={50} color="#151718"/>
                    </Pressable>
                </Pressable>

                <Pressable style={styles.button}>
                    <ThemedText style={styles.buttonText}>Take a gamble</ThemedText>
                    <Pressable style={styles.buttonBox}>
                        <MaterialIcons name="face" size={50} color="#151718"/>
                    </Pressable>
                </Pressable>
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
        display: "flex",
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
