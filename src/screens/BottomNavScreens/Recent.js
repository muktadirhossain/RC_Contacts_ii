import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppDescriptionScreen from '../AppDescriptionScreen';
import colors from '../../assets/Colors';
import PersonalDetailsScreen from '../PersonalDetailsScreen';
import Favorite from '../mainNavigationScreens/MainFavorite';
import EmergencyDetailsScreen from '../EmergencyDetailsScreen';

const Stack = createStackNavigator();

const Favorites = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.topBarBackground},
        headerTitleStyle: {color: 'white', fontSize: 20},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Favoritee"
        component={Favorite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={AppDescriptionScreen}
        options={{headerShown: true, title: 'About App'}}
      />
      <Stack.Screen
        name="PersonalDetailsScreen"
        component={PersonalDetailsScreen}
        options={{headerShown: true, title: 'PersonalDetailsScreen'}}
      />

      <Stack.Screen
        name="EmergencyDetailsScreen"
        component={EmergencyDetailsScreen}
        options={{headerShown: true, title: 'Emergency Contacts Details'}}
      />
    </Stack.Navigator>
  );
};

export default Favorites;
