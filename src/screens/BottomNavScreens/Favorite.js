import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppDescriptionScreen from '../AppDescriptionScreen';
import colors from '../../assets/Colors';
import PersonalDetailsScreen from '../PersonalDetailsScreen';
import OfficeScreen from '../OfficeScreen';
import MainFavoriteScreen from '../mainNavigationScreens/MainFavoriteScreen';
import CategoryScreen from '../CategoryScreen';
import DepartmentsScreen from '../DepartmentsScreen';
import Faculty_OfficeScreen from '../Faculty_OfficeScreen';
import EmergencyDetailsScreen from '../EmergencyDetailsScreen';
import SplashScreen from '../SplashScreen'


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
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainFavoriteScreen"
        component={MainFavoriteScreen}
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
        name="CategoryScreen"
        component={CategoryScreen}
        options={{headerShown: true, title: 'CategoryScreen'}}
      />
      <Stack.Screen
        name="OfficeScreen"
        component={OfficeScreen}
        options={{headerShown: true, title: 'OfficeScreen'}}
      />
      <Stack.Screen
        name="DepartmentsScreen"
        component={DepartmentsScreen}
        options={{headerShown: true, title: 'DepartmentsScreen'}}
      />
      <Stack.Screen
        name="Faculty_OfficeScreen"
        component={Faculty_OfficeScreen}
        options={{headerShown: true, title: 'Faculty_OfficeScreen'}}
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

