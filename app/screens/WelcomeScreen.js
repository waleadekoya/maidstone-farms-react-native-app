import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card} from 'react-native-paper'
import {registerStyles} from "../config/register/styles";
import {loginStyles} from "../config/login/loginStyles";


function WelcomeScreen({ navigation }) {
    const remoteImage = { uri: `https://farm5.staticflickr.com/4702/24825836327_bb2e0fc39b_b.jpg` };
    // https://github.com/packtpublishing/react-and-react-native
    const boxes = new Array(3).fill(null).map((v, i) => i + 1);
    return (
        <SafeAreaView
            style={loginStyles.content}>
            <View style={loginStyles.view}>
                <Card>
                    <Card.Content>
                        <Button style={registerStyles.button} mode="contained" onPress={() => navigation.navigate('Login')}> Login </Button>
                        <Button style={registerStyles.button} mode="contained" onPress={() => navigation.navigate('Register')}> Register </Button>
                        <Button title="Admin" onPress={() => navigation.navigate('GridBox')}></Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>);
}


export default WelcomeScreen;
