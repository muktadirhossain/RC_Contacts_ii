// This is the main Home Screen
// This is the main Home Screen
// This is the main Home Screen
// This is the main Home Screen
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopBar from '../../components/TopBar';
import SplashScreen from '../SplashScreen';
import MenuIcon from '../../component-2/MenuIcon';
import API from '../../assets/API';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import colors from '../../assets/Colors';

const MainHome = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  setTimeout(() => {
    fetchDataANDSaveToLocalDB('office', API.office_content_url);
    fetchDataANDSaveToLocalDB('allProfiles', API.profile);
    fetchDataANDSaveToLocalDB('additionalDuty', API.admins_info_url);
    fetchDataANDSaveToLocalDB('rajshahi_city', API.rajshahi_city_url);
    fetchDataANDSaveToLocalDB('emergency_contacts', API.Emergency_Content_url);
  }, 100);

  const gotoMainScreen= ()=>{
    setShowSplash(false)
  }

  // BackHandler for exiting the app:
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSplash(false);
  //   }, 1700);
  // }, []);
  // useEffect(() => {
  //   const backAction = () => {
  //    BackHandler.exitApp()
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, [navigation]);

  // Fetch data from server & save to local DataBase:
  const fetchDataANDSaveToLocalDB = async (key, API_url) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null && isConnected) {
        console.log('we have data & net connection');
        clearAll(key, API_url);
      } else {
        // CHECK WIFI CONNECTION
        isConnected
          ? axios.get(API_url).then(response => {
              const fetchedData = response.data;
              storeData(fetchedData, key);
            })
          : null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Store Data Function
  const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  // Clear local storage & save to local Db
  const clearAll = async (key, API_url) => {
    try {
      // await AsyncStorage.clear();
      await axios.get(API_url).then(async response => {
        const fetchedData = response.data;
        await AsyncStorage.removeItem(key);
        storeData(fetchedData, key);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {showSplash ? (
        <SplashScreen gotoMainScreen={gotoMainScreen} navigation={navigation}/>
      ) : (
        <ImageBackground
          resizeMode="contain"
          source={require('../../assets/Images/rcadminbuilding40.png')}
          style={{backfaceVisibility: 'hidden'}}>
          <TopBar navigation={navigation} />
          <ScrollView contentContainerStyle={styles.scrollView}>
            <MenuIcon
              title="প্রশাসন"
              unit_name="ADMIN"
              source={require('../../assets/Images/1.png')}
              navigation={navigation}
            />

            <MenuIcon
              title="অনুষদ"
              unit_name="FACULTY"
              source={require('../../assets/Images/dept.png')}
              navigation={navigation}
            />
            <MenuIcon
              title="বিভাগ"
              unit_name="DEPARTMENTS"
              source={require('../../assets/Images/2.png')}
              navigation={navigation}
            />
            <MenuIcon
              title="অন্যান্য বিভাগ"
              unit_name="FACILITIES"
              source={require('../../assets/Images/facilities.png')}
              navigation={navigation}
            />
            <MenuIcon
              title="সংগঠন সমূহ"
              unit_name="CLUBS"
              source={require('../../assets/Images/club.png')}
              navigation={navigation}
            />

            <MenuIcon
              title="হোস্টেল"
              unit_name="HOSTEL"
              source={require('../../assets/Images/hostel.png')}
              navigation={navigation}
            />
            <MenuIcon
              title="জরুরী সেবা"
              unit_name="Emergency_Contact"
              source={require('../../assets/Images/emergency.png')}
              navigation={navigation}
            />
            <MenuIcon
              title="রাজশাহী নগরী"
              unit_name="Rajshahi_City"
              source={require('../../assets/Images/city1.png')}
              navigation={navigation}
            />
          </ScrollView>
        </ImageBackground>
      )}
    </>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingBottom: '20%',
    paddingVertical: 10,
    backfaceVisibility: colors.primaryBackground,
  },
});
