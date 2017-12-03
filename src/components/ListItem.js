import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';


export default class ListItem extends Component {
    render() {

        const { titleStyle } = styles;
        
        return(
            <CardSection>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const style = new StyleSheet( {
    titleStyle: {
        fontSize: 18,

    }
});