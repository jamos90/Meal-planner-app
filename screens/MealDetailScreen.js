import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

const MealDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>MealDetailScreen works</Text>
            <Button title="take me back to detaisl" onPress={()=>props.navigation.popToTop()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealDetailScreen