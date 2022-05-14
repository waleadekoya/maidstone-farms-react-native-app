import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card} from 'react-native-paper'
import {registerStyles} from "../config/register/styles";
import {loginStyles} from "../config/login/loginStyles";


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView
            style={loginStyles.content}>
            <View style={loginStyles.view}>
                <Card>
                    <Card.Content>
                        <Button title="Admin" onPress={() => navigation.navigate('GridBox')}></Button>
                        <Button style={registerStyles.button} mode="contained" onPress={() => navigation.navigate('Register')}> Log In </Button>
                        <Button style={registerStyles.button} mode="contained" onPress={() => navigation.navigate('Login')}> Register </Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>);
}


export default HomeScreen;
