import React from 'react';

import { StyleSheet, View } from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>CategoriesScreen workds</Text>
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

export default CategoriesScreen