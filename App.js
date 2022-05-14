import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper'
import GridBox from "./app/components/GridBox";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import {globalTheme} from "./app/config/styles";
import HomeScreen from "./app/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // https://subscription.packtpub.com/book/web_development/9781839211140/18
        // https://reactnavigation.org/docs/getting-started/
        <PaperProvider theme={globalTheme}>
            {/*<HeaderComponent title="Home Page"/>*/}
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/*<Stack.Screen name="Welcome to Maidstone Farms" component={WelcomeScreen} />*/}
                    <Stack.Screen name="Maidstone Farms Home" component={HomeScreen} />
                    <Stack.Screen name="GridBox" component={GridBox} />
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                    <Stack.Screen name="Login" component={LogInScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>

    // Screen Navigation
    // https://github.com/PacktPublishing/React-and-React-Native---Third-Edition/tree/master/Chapter15
);
}


export default App;


/*
 A. Screen Navigation Libraries
    1. React Navigation - most common
    2. React Native Router Flux  # https://github.com/aksonov/react-native-router-flux
 B. State Management Libraries
    1. Redux - larger community base with tons of boilerplate codes # https://react-redux.js.org/introduction/getting-started
    2. MobX
 C. Unit Testing - Jest
 D. End-to-End/User/Integration Testing - Detox (automate manual QA process)
 E. Ci/CD - fastlane
 F. Beta Deployment - Testflight/Google Play/Crashlytics (by Google)
 H. Picking the right library (no of contributors/ fork it)
 I. Stay on top of Upgrades (planning)
 J. Focus on Performance
    1. Run Animations on native driver
    2. Use FlatList or SectionList for large datasets instead of ListView
    3. Ensure every item in the list has a unique key attribute
*/




