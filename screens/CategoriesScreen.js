import React from 'react';

import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const CategoriesScreen = props => {
    return(
      <FlatList numColumns={2}>

      </FlatList>
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