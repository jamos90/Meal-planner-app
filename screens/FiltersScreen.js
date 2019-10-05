import React from 'react';

import { StyleSheet, View, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions </Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-Free</Text>
                <Switch/>
            </View>
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
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
        
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FiltersScreen