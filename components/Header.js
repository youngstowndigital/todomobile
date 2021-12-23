import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        paddingTop: 40,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "white",
        fontSize: 20
    }
});

export default Header;
