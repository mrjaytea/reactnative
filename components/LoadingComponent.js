import React from 'react';
// ActivityIndicator is a spinning wheel like stuff
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return(
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color="#6688FF" />
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    loadingText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Loading;