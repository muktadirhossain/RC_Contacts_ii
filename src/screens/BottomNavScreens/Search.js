import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API from '../../assets/API';
import colors from '../../assets/Colors';
import StaffComponents from '../../components/StaffComponents';
import TopBar from '../../components/TopBar';

const Recent = ({navigation}) => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchArray = searchTerm => {
    return data.filter(item =>
      item.fullNameNew.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  useEffect(() => {
    //  check the Internet Connection here
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type:', state.type);
      console.log('Is connected?', state.isConnected);
      state.isConnected ? setIsConnected(!isConnected) : setIsConnected(false);
    });
    // Unsubscribe
    unsubscribe();
    //  check the Internet Connection Ends here
    localStorageHasData('allProfiles');
  }, []);

  const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const localStorageHasData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(JSON.parse(value));
      } else {
        // CHECK WIFI CONNECTION
        isConnected == true
          ? axios.get(API.profile).then(response => {
              const fetchedData = response.data;
              storeData(fetchedData, key);
              setData(response.data);
            })
          : axios.get(API.profile).then(response => {
              const fetchedData = response.data;
              storeData(fetchedData, key);
              setData(response.data);
            });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search People..."
      />
      {searchTerm ? (
        <View style={styles.displayContainer}>
          <FlatList
            data={searchArray(searchTerm)}
            renderItem={({item}) => (
              <StaffComponents navigation={navigation} teacher={item} />
            )}
          />
        </View>
      ) : (
        <View style={styles.splashView}>
          <Image source={require('../../assets/Images/search.png')} />
          <Text style={styles.splashText}>
            Searched Contacts Will Appear here
          </Text>
        </View>
      )}
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  searchInput: {
    borderColor: colors.topBarBackground,
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor: 'lightgrey',
  },
  displayContainer: {
    paddingTop: 15,
    paddingBottom: 35,
    paddingHorizontal: 10,
  },
  splashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  splashText: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.topBarBackground,
    paddingTop: 20,
  },
});
