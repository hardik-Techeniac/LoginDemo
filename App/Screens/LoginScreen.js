import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Api_call from '../Network/Api_call';


const LoginScreen = props => {
    const Login = async () => {
        Api_call.post()
    }
    return (
        <View style={{ marginTop: 40, flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'pink', flex: 1 }}>
                <Button title='Login' style={{ backgroundColor: 'red', flex: 1 }}></Button>
            </View>
        </View >
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default LoginScreen;
