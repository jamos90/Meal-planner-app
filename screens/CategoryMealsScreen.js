import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

const CategoriesMealScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>CategoriesMealScreen workds</Text>
            <Button title="go to details" onPress={()=>props.navigation.navigate({routeName: "MealDetail"})}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesMealScreen