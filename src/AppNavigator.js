import {Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Recent from './screens/BottomNavScreens/Recent.js';
import colors from './assets/Colors.js';
import Home from './screens/BottomNavScreens/Favorite.js';
import SearchMain from './screens/BottomNavScreens/SearchMainScreen';

const Bottom = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.topBarBackground,
            paddingTop: 10,
            height: '7.2%',
            justifyContent: 'space-between',
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: colors.onFocusColor,
          tabBarLabelStyle: {
            fontSize: 11,
            paddingVertical: 1,
            textAlign: 'center',
            paddingBottom: 2,
            marginTop: 1,
          },
          
        }}
      //   screenOptions={{
      //     tabBarHideOnKeyboard: true
      //  }}
        >
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../src/assets/Images/home11.png')}
                  style={{
                    width: 45,
                    height: 45,
                    tintColor: tabInfo.focused ? colors.onFocusColor : 'white',
                  }}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="Favorite"
          component={Recent}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../src/assets/Images/fav-01(2).png')}
                  style={{
                    width: 35,
                    height: 40,
                    tintColor: tabInfo.focused ? colors.onFocusColor : 'white',
                  }}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="Search"
          component={SearchMain}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../src/assets/Images/search.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: tabInfo.focused ? colors.onFocusColor : 'white',
                  }}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
