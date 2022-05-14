import React from 'react';
import {Appbar} from "react-native-paper";
import PropTypes from "prop-types";

export const HeaderComponent = (props) => {
    return (
        <Appbar>
            <Appbar.BackAction/>
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}

// interface HeaderComponentParams {
//     title: string;
// }

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
}
