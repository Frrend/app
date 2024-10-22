import {Button, StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Camera, CameraView} from 'expo-camera';
import {ThemedText} from "@/components/ThemedText";
import {requestPermissionsAsync} from "expo-media-library";

export default function FaceShape() {
    let cameraRef = useRef(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
    const [photo, setPhoto] = useState();


    useEffect(() => {
        (async () => {
            const cameraPermissions = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermissions = await requestPermissionsAsync();
            setHasCameraPermission(cameraPermissions.status === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermissions.status === "granted");
        })();
    }, [])

    if (hasCameraPermission === undefined) {
        return <ThemedText>Requesting permissions...</ThemedText>
    } else if (!hasCameraPermission) {
        return <ThemedText>Permissions for camera not granted. Please change in settings.</ThemedText>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        }

        let newPhoto = await (cameraRef.current as any).takePictureAsync(options);
        setPhoto(newPhoto);
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
