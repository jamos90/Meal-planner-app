import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>FiltersScreen workds</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filtered Meals',
        headerLeft: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName={'ios-menu'} onPress={()=> navData.navigation.toggleDrawer()}></Item>
        </HeaderButtons>

    }   
    
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FiltersScreen