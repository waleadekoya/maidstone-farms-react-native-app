import {StyleSheet} from "react-native";


export const loginStyles = StyleSheet.create({
    cardButton: {
        margin: 5,
        marginRight:0,
        marginLeft:0,
        height: 50,
        justifyContent : "center"
    },
    cardTitle: {
        color: "rgb(101, 37, 131)",
    },
    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "stretch"
    },
    content: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgb(101, 37, 131)",
    },
    view: {
        width: "90%",
        flexDirection: "column",
    },
})

// export default loginStyles;
