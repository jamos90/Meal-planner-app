import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const FavoritesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>FaVScreen workds</Text>
        </View>
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen