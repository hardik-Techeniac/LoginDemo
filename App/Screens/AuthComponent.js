import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { readData } from '../../storage/Storage';
import { LoginDetails } from '../utils/constant';
const AuthComponent = () => {
    const [detail, setDetail] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        checkSignin();
    });

    const checkSignin = async () => {
        console.log("Authentication Pass -----------------")
        const data = await readData(LoginDetails);
        if (data) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: 'HomeScreen',
                        },
                    ],
                }),
            );
        } else {
            console.log("Data -----------------")
            navigation.navigate('LoginScreen');
        }
    };

    return (
        <View>
            <Text />
        </View>
    );
};

export default AuthComponent;
