import React from 'react';
import {TextInput, Card, Button} from 'react-native-paper'
import {SafeAreaView, View} from "react-native";
import {loginStyles} from "../config/login/loginStyles";


function LoginScreen() {
    return (
            <SafeAreaView style={loginStyles.content}>
                <View style={loginStyles.view}>
                    <Card>
                        <Card.Title title="Maidstone Farms App" titleStyle={loginStyles.cardTitle}></Card.Title>
                        <Card.Content>
                            <TextInput label="Email" keyboardType="email-address"/>
                            <TextInput label="Password" secureTextEntry={true}/>
                            <Button uppercase={false} style={loginStyles.cardButton}>Forgot email/password </Button>
                            <Button mode="contained" style={loginStyles.cardButton}> Login </Button>
                            <Button style={loginStyles.cardButton}> Register </Button>
                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
    )
}


export default LoginScreen;
