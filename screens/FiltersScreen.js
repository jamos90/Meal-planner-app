import React, { useState, useCallback, useEffect } from 'react';

import { StyleSheet, View, Text, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/filterSwitch';
import Colors from '../constants/colors';

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters= {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(()=>{
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    const onSwitchChange = useCallback((switchStatus, label)=>{

        if(label === 'Gluten Free') {
            setIsGlutenFree(switchStatus);
        }
        if(label === 'Lactose Free') {
            setIsLactoseFree(switchStatus)
        }
        if(label === 'Vegan') {
            setIsVegan(switchStatus)
        }
        if(label === 'Vegetarian') {
            setIsVegetarian(switchStatus)
        }

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions </Text>
            <FilterSwitch label="Gluten Free" value={isGlutenFree} onChange={onSwitchChange}/>
            <FilterSwitch label="Lactose Free" value={isLactoseFree} onChange={onSwitchChange}/>
            <FilterSwitch label="Vegan" value={isVegan} onChange={onSwitchChange}/>
            <FilterSwitch label="Vegetarian" value={isVegetarian} onChange={onSwitchChange}/>
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filtered Meals',
        headerLeft: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName={'ios-menu'} onPress={()=> navData.navigation.toggleDrawer()}></Item>
        </HeaderButtons>,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName={'ios-save'} onPress={navData.navigation.getParam('save')}></Item>
        </HeaderButtons>
    }      
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    }
})

export default FiltersScreen