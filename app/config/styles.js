import {Platform, StatusBar, StyleSheet} from "react-native";
import {DefaultTheme} from "react-native-paper";

export const globalTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(101, 37, 131)',
        background: 'transparent',
    }
}

const shared = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: "darkslategray",
}

const styles = StyleSheet.create({
    // https://subscription.packtpub.com/book/web_development/9781839211140/17/ch17lvl1sec24/flexbox-is-the-new-layout-standard
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "ghostwhite",
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 15,
        marginRight: 15,
        ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    },
    button: {
        color: "darkslategray",
        borderWidth: 1,
        justifyContent: 'space-around',
    },
    gridBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: "ghostwhite",
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        marginLeft: 15,
        marginRight: 15,
        ...Platform.select({
            ios: {paddingTop: 50},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },
    rectangleBox: {
        height: 100,
        alignSelf: "stretch",
        ...shared,
    },
    // https://subscription.packtpub.com/book/web_development/9781839211140/17/ch17lvl1sec26/building-flexbox-layouts
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "stretch"
    },
    squareBox: {
        width: 100,
        height: 100,
        ...shared,
        ...Platform.select({
            ios: {margin: 5, marginRight: 20},
            android: {margin: 5, marginRight: 10, marginLeft: 5}
        })
    },
})

export default styles;
