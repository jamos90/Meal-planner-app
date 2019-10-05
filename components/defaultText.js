import React from 'react';
import {Text, Stylesheet } from 'react-native';

const DefaultText = props => {
    return (
        <Text style={styles.defaultText}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    defaultText: {
        
    }
});

export default DefaultText