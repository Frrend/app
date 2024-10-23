import {Pressable, StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Camera, CameraView} from 'expo-camera';
import {ThemedText} from "@/components/ThemedText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";

export default function FaceShape() {
    let cameraRef = useRef(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const cameraPermissions = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermissions.status === "granted");
        })();
    }, [])

    if (hasCameraPermission === undefined) {
        return <ThemedText>Requesting permissions...</ThemedText>
    } else if (!hasCameraPermission) {
        return <ThemedText>Permissions for camera not granted. Please change in settings.</ThemedText>
    }

    function Button({iconName, size, margin}: { iconName: string, size: number, margin: number }) {
        return <Pressable>
            <Pressable>
                <MaterialCommunityIcons name={iconName as any} size={size} style={{margin: margin}} color="#151718"/>
            </Pressable>
        </Pressable>;
    }

    return (
        <CameraView style={styles.container} ref={cameraRef} facing={"front"}>
            <Link href="/home"><Button iconName={"home"} size={50} margin={15}/></Link>
            <View style={styles.bigButtonContainer}>
                <View style={styles.buttonContainer}>
                    <Button iconName={"arrow-left-bold"} size={50} margin={20}/>
                    <Button iconName={"arrow-right-bold"} size={50} margin={20}/>
                </View>
            </View>
        </CameraView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bigButtonContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})
