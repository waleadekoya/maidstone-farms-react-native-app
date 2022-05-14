import {Text, View, SafeAreaView} from "react-native";
import {Button, Card} from 'react-native-paper'
import PropTypes from "prop-types";

import styles from "../config/styles";
import {registerStyles} from "../config/register/styles";


const Box = ({children, boxStyle}) => (
    <SafeAreaView>
        <View style={boxStyle}>
            <Button
                // style={styles.boxText}>
                style={registerStyles.button}>
                {children}
            </Button>
        </View>
    </SafeAreaView>

);

Box.propTypes = {
    children: PropTypes.node.isRequired,
    // boxStyle: PropTypes.node.isRequired,
}
Box.defaultProps = {
    boxStyle: styles.rectangleBox,
}

export default Box
