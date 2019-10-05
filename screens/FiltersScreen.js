import React, { useState, useCallback } from 'react';

import { StyleSheet, View, Text, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/filterSwitch';
import Colors from '../constants/colors';

const FiltersScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)

    const onSwitchChange = useCallback((switchStatus)=>{

        console.log(switchStatus);

        setIsGlutenFree(switchStatus);
    }, [isGlutenFree]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions </Text>
            <FilterSwitch value={isGlutenFree} onChange={onSwitchChange}>Gluten Free</FilterSwitch>


            {/* <View style={styles.filterContainer}>
            
                <Text>Gluten-Free</Text>
                <Switch value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)} trackColor={{true: Colors.primaryColor}} thumbColor={ Platform.OS === 'android' ? Colors.primaryColor : ''}/>
            </View>
            <View style={styles.filterContainer}>
                <Text>Lactose-Free</Text>
                <Switch value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)} trackColor={{true: Colors.primaryColor}} thumbColor={ Platform.OS === 'android' ? Colors.primaryColor : ''}/>
            </View> */}
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