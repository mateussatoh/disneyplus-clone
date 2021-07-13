import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './src/screens/Landing';
import { Movies } from './src/screens/Movies';
import { BottomNavigator } from './src/navigation/BottomNavigator';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Landing' headerMode='none'>
                <Screen name='Landing' component={Landing}/>
                <Screen name='Movies' component={BottomNavigator}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;