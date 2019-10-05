import React from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch value={props.value} onValueChange={newValue => props.onChange(newValue, props.label)} trackColor={{true: Colors.primaryColor}} thumbColor={ Platform.OS === 'android' ? Colors.primaryColor : ''}/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default FilterSwitch;
