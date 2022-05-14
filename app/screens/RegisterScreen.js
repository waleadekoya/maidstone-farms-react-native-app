import React from 'react';
import {Button, TextInput} from 'react-native-paper'
import {SafeAreaView, ScrollView, View} from "react-native";
import {registerStyles} from "../config/register/styles";
import {HeaderComponent} from "../components/Header";


function RegisterScreen() {
    return (
            <SafeAreaView>
                <ScrollView>
                    <HeaderComponent title="Register"/>
                    <View style={registerStyles.content}>
                        <TextInput label="Name"/>
                        <TextInput label="Email" keyboardType="email-address"/>
                        <TextInput label="Password"
                                   secureTextEntry={true}
                                   right={<TextInput.Icon name="eye-off-outline"/>}
                                   color={registerStyles.icon.color}
                        />
                        <TextInput label="Confirm Password"
                                   secureTextEntry={true}
                                   right={<TextInput.Icon name="eye-off-outline"/>}
                                   color={registerStyles.icon.color}
                        />
                        <TextInput label="Phone Number" keyboardType="phone-pad"/>
                        <Button style={registerStyles.button} mode="contained"> Register </Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}


export default RegisterScreen;
