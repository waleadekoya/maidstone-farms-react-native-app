import {StyleSheet} from "react-native";
import {globalTheme} from "../styles";


export const registerStyles = StyleSheet.create({
    button: {
        margin: 15,
        marginRight:0,
        marginLeft:0,
        height: 50,
        justifyContent : "center"
    },
    content: {
        padding: 15,
        paddingTop: 0,
    },
    icon: {
        color : globalTheme.colors.primary
    }
})

// export default registerStyles;
