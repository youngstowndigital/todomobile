import React from 'react';
import { StyleSheet, Image } from 'react-native';

const DisplayImage = ({ taskStatus }) => {
    if (taskStatus.length < 1) {
        return (
            <Image style={styles.image} source={require('../assets/tick.png')} />
        );
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        margin: 80,
        marginTop: 250
    }
});

export default DisplayImage;
