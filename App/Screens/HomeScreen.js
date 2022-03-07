import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = props => {
    return (
        <View style={{ marginTop: 40, flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <Button title='' style={{ backgroundColor: 'red', flex: 1 }}></Button>
            </View>
        </View >
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
