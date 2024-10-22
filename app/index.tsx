import {Button, StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Camera, CameraView} from 'expo-camera';
import {ThemedText} from "@/components/ThemedText";

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

    return (
        <CameraView style={styles.container} ref={cameraRef} facing={"front"}>
            <View style={styles.buttonContainer}>
                <Button title={"<"}></Button>
                <Button title={">"}></Button>
            </View>
        </CameraView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
})
