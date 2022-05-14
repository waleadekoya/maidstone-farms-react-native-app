import {View, StatusBar} from "react-native";


import styles from "../config/styles";
import Box from "./Box";
import {Button} from "react-native-paper";


export default function GridBox(props) {
    const boxes = new Array(10).fill(null).map((v, i) => i + 1);
    return <View style={styles.gridBoxContainer}>
        <StatusBar hidden={false}/>
        {boxes.map(i => <Box boxStyle={styles.squareBox} key = {i}>#{i}</Box>)}
        {/*{boxes.map(i => <Button title={i} onPress={() => props.navigation.navigate('Login')}></Button>)}*/}
        {/*<Button title="Admin" onPress={() => props.navigation.navigate('GridBox')}></Button>*/}
    </View>;
}
